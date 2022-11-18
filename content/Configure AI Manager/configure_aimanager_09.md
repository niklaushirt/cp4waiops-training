---
title: "Configure Certificates"
date: 2022-11-03T10:57:46+01:00
weight: 59
---

# Create valid Ingress Certificates


A signed certificate is needed on the NGNIX pods for the Slack and Teams integrations.\
The AutomationUIConfig instance controls the certificates and the NGINX pods that use them.



###

{{< task title="Create valid Ingress Certificates" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli" >}}
Create valid Ingress Certificates as described in the Documentation.

{{< /task >}}


{{< expand "Need Help?" "⬇" >}}








## Patch NetworkPolicy

1. Run the following command to patch the NetworkPolicy

    ```bash
    export WAIOPS_NAMESPACE=$(oc get po -A|grep aiops-orchestrator-controller |awk '{print$1}')

    cat <<EOF | oc apply -f -
    apiVersion: networking.k8s.io/v1
    kind: NetworkPolicy
    metadata:
      name: allow-all-egress-and-ingress
      annotations:
        argocd.argoproj.io/sync-wave: "3"
      namespace: $WAIOPS_NAMESPACE
    spec:
      egress:
      - {}
      ingress:
      - {}
      podSelector: {}
      policyTypes:
      - Egress
      - Ingress
    EOF
    ```


1. Run the following command to patch AutomationUIConfig Certificates

    ```bash
    export WAIOPS_NAMESPACE=$(oc get po -A|grep aiops-orchestrator-controller |awk '{print$1}')

    oc project $WAIOPS_NAMESPACE
    NAMESPACE=$WAIOPS_NAMESPACE
    AUTO_UI_INSTANCE=$(oc get AutomationUIConfig -n $NAMESPACE --no-headers -o custom-columns=":metadata.name")
    IAF_STORAGE=$(oc get AutomationUIConfig -n $NAMESPACE -o jsonpath='{ .items[*].spec.zenService.storageClass }')
    ZEN_STORAGE=$(oc get AutomationUIConfig -n $NAMESPACE -o jsonpath='{ .items[*].spec.zenService.zenCoreMetaDbStorageClass }')

    echo "AUTO_UI_INSTANCE:   "$AUTO_UI_INSTANCE
    echo "IAF_STORAGE:        "$IAF_STORAGE
    echo "ZEN_STORAGE:        "$ZEN_STORAGE

    oc get -n $NAMESPACE AutomationUIConfig $AUTO_UI_INSTANCE --ignore-not-found -o yaml > /tmp/AutomationUIConfig-backup-$(date +%Y%m%d-%H%M).yaml
    
    if [[ ! $IAF_STORAGE == "" ]];
    then
    oc delete -n $NAMESPACE AutomationUIConfig $AUTO_UI_INSTANCE

    cat <<EOF | oc apply -f -
    apiVersion: core.automation.ibm.com/v1beta1
    kind: AutomationUIConfig
    metadata:
      name: $AUTO_UI_INSTANCE
      namespace: $NAMESPACE
    spec:
      description: AutomationUIConfig for cp4waiops
      license:
        accept: true
      version: v1.3
      zen: true
      zenService:
        iamIntegration: true
        storageClass: $IAF_STORAGE
        zenCoreMetaDbStorageClass: $ZEN_STORAGE
      tls:
        caSecret:
          key: ca.crt
          secretName: external-tls-secret
        certificateSecret:
          secretName: external-tls-secret
    EOF
    else
      echo "Couldn't get IAF_STORAGE"
    fi
    ```


1. Run the following command to patch the Ingress Certificates

    ```bash
    export WAIOPS_NAMESPACE=$(oc get po -A|grep aiops-orchestrator-controller |awk '{print$1}')

    ingress_pod=$(oc get secrets -n openshift-ingress | grep tls |grep -v router-token-| grep -v router-metrics-certs-default | awk '{print $1}')
    oc get secret -n openshift-ingress ${ingress_pod} -o jsonpath='{.data.tls\.crt}'  | base64 -d > /tmp/cert.crt
    oc get secret -n openshift-ingress ${ingress_pod} -o jsonpath='{.data.tls\.key}' | base64 -d > /tmp/cert.key
    oc get secret -n $WAIOPS_NAMESPACE iaf-system-automationui-aui-zen-ca -o jsonpath='{.data.ca\.crt}' | base64 -d > /tmp/ca.crt

    oc get secret -n $WAIOPS_NAMESPACE external-tls-secret --ignore-not-found -o yaml > /tmp/external-tls-secret-backup-$(date +%Y%m%d-%H%M).yaml
    oc delete secret -n $WAIOPS_NAMESPACE --ignore-not-found external-tls-secret
    oc create secret generic -n $WAIOPS_NAMESPACE external-tls-secret --from-file=ca.crt=/tmp/ca.crt --from-file=cert.crt=/tmp/cert.crt --from-file=cert.key=/tmp/cert.key --dry-run=client -o yaml | oc apply -f -
    REPLICAS=2
    oc scale Deployment/ibm-nginx --replicas=0
    sleep 3
    oc scale Deployment/ibm-nginx --replicas=${REPLICAS}

    ```


1. To check that the nginx Pods are back up, run the following:

```bash
export WAIOPS_NAMESPACE=$(oc get po -A|grep aiops-orchestrator-controller |awk '{print$1}')
while :; do clear; echo "Checking..."; echo "Exit with Ctrl-C"; oc get po -n $WAIOPS_NAMESPACE | grep nginx|grep -v ibm-nginx-tester|grep -v setup-nginx-job ; sleep 2; done
```

This will list the Pods that are Ready.

Wait until you get two pods with `1/1` status

```yaml
ibm-nginx-xxxxx-xxx                                       1/1     Running     0               4h9m
ibm-nginx-xxxxx-xxx                                       1/1     Running     0               4h9m
```

###

> This creates valid certificates for the OpenShift Ingress, so that you can integrate with Slack.


{{< /expand >}}

#
#

{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on Configuring AIManager**\
Please continue to the next chapter to learn how to train the AI Models.
{{< /hint >}}

