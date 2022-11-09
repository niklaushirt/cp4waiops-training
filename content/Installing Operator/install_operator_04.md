---
title: "Install Operator"
date: 2022-11-03T10:57:46+01:00
weight: 24
---

# Installing the Operator

{{< task title="Install the Operator" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli" >}}

Next you have to install the AIManager Operator.

{{< /task >}}




{{< expand "Solution" "⬇" >}}

1. Run the following command:
 
	```yaml
	cat << EOF | oc apply -f -
	apiVersion: operators.coreos.com/v1alpha1
	kind: Subscription
	metadata:
	  name: ibm-aiops-orchestrator
	  namespace: cp4waiops
	spec:
	  channel: v3.5
	  installPlanApproval: Automatic
	  name: ibm-aiops-orchestrator
	  source: ibm-operator-catalog
	  sourceNamespace: openshift-marketplace
	EOF





> This creates the `Operator` instance that will be looking for an `Installation` definition and start the installation if it exists (you'll create this in one of the next steps). 

{{< /expand >}}
