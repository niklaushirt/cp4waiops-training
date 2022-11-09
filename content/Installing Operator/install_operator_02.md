---
title: "Preparing Installation"
date: 2022-11-03T10:57:46+01:00
weight: 22
---

# Preparing the Installation

In order to install the AIManager Operator you first have to create the following resources:
- Namespace
- OperatorGroup
- IBM Pull Secret (Entitlement)

{{< doc_link "Solution" "⬇" >}}
https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli
{{< /doc_link >}}

# 


{{< task title="Create the Namespace" link="" >}}{{< /task >}}

{{< expand "Solution" "⬇" >}}

## Create the namespace (project)


1. Create a namespace called `cp4waiops`, by running the following command:

	```
	oc create namespace cp4waiops
    ```

###

> This creates the `Namespace` in which you will install AIManager

{{< /expand >}}


##






{{< task title="Create the Operator Group" link="" >}}{{< /task >}}

{{< expand "Solution" "⬇" >}}



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

###

> This creates the `OperatorGroup` needed for the Operator to deploy into the `cp4waiops` Namespace




{{< /expand >}}

##





{{< task title="Create the Pull Secret" link="" >}}{{< /task >}}

{{< expand "Solution" "⬇" >}}



## Create the entitlement key pull secret



1. Log in to [MyIBM Container Software Library](https://myibm.ibm.com/products-services/containerlibrary) with the IBMid.

2. In the *Entitlement keys* section, select **Copy key** to copy your entitlement key to the clipboard.

3. Run the following command:

   ```bash
   oc create secret docker-registry ibm-entitlement-key \
       --docker-username=cp\
       --docker-password=_entitlement-key_ \
       --docker-server=cp.icr.io \
       --namespace=cp4waiops
   ```

    Where `_entitlement-key_` is the entitlement key that you copied in the previous step.

###

> This creates the `Secret` with your IBM Entitlement that will allow the images to be pulled from the IBM Container Registry

{{< /expand >}}



