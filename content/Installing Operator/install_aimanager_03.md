---
title: "Install Operator"
date: 2022-11-03T10:57:46+01:00
weight: 24
---

# Installing the Operator


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
	```



