---
title: "Preparing Installation"
date: 2022-11-03T10:57:46+01:00
weight: 22
---

# Preparing Installation


## Create the namespace (project)


1. Create a namespace called `cp4waiops`, by running the following command:

	```
	oc create namespace cp4waiops
    ```


{{< hint type=tip title="Info" >}}
This creates the `Namespace` in which you will install AI Manager
{{< /hint >}}


## Create the OperatorGroup




1. Create the Operator group by running the following command:

	```yaml
	cat << EOF | oc apply -f -
	apiVersion: operators.coreos.com/v1
	kind: OperatorGroup
	metadata:
	  name: cp4waiops-operator-group
	  namespace: cp4waiops
	spec:
	  targetNamespaces:
	    - cp4waiops
	EOF
    ```


{{< hint type=tip title="Info" >}}
This creates the `OperatorGroup` needed for the Operator to deploy into the `cp4waiops` Namespace
{{< /hint >}}




## Create the entitlement key pull secret



1. Log in to [MyIBM Container Software Library](https://myibm.ibm.com/products-services/containerlibrary) with the IBMid.

2. In the *Entitlement keys* section, select **Copy key** to copy your entitlement key to the clipboard.

3. Run the following command:

   ```bash
   oc create secret docker-registry ibm-entitlement-key \
       --docker-username=cp\
       --docker-password=<entitlement-key> \
       --docker-server=cp.icr.io \
       --namespace=cp4waiops
   ```

    Where `<entitlement-key>` is the entitlement key that you copied in the previous step.

{{< hint type=tip title="Info" >}}
This creates the `Secret` with your IBM Entitlement that will allow the images to be pulled from the IBM Container Registry
{{< /hint >}}

