---
title: "Install Catalog"
date: 2022-11-03T10:57:46+01:00
weight: 23
---

# Installing the IBM Catalog



1. Run the following command to create the CatalogSource.

   ```yaml
   cat << EOF | oc apply -f -
   apiVersion: operators.coreos.com/v1alpha1
   kind: CatalogSource
   metadata:
     name: ibm-operator-catalog
     namespace: openshift-marketplace
   spec:
     displayName: ibm-operator-catalog
     publisher: IBM Content
     sourceType: grpc
     image: icr.io/cpopen/ibm-operator-catalog:latest
   EOF
   ```
   
1. Update the CatalogSource to always use the current image digest by running the following commands:

   ```bash
   IMGDIGEST=`oc get pods -n openshift-marketplace -l=olm.catalogSource=ibm-operator-catalog --no-headers -o=jsonpath="{.items[0].status.containerStatuses[0].imageID}" -n openshift-marketplace` && \
   oc patch catalogsource ibm-operator-catalog -n openshift-marketplace --type=json -p "[{ "op": "test", "path": "/spec/image", "value": "\"icr.io/cpopen/ibm-operator-catalog:latest\"" }, { "op": "replace", "path": "/spec/image", "value": "\"$IMGDIGEST\"" }]"
   ```


{{< hint type=info title="Info" >}}
This creates the `CatalogSource` that provides the available IBM Operators (not just CP4WAIOPS). 

You can go to Operators/OperatorHub in your Openshift Web Console to check out the available Operators 
{{< /hint >}}
