---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 25
---

# Check if the Operator is ready



{{< task title="Verify that the Operator is running" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli" >}}

Check that the Operator is running and that you can continue with the next chapter to install AIManager. You can do this by listing the ClusterServiceVersions (csv) for the `cp4waiops` Namespace.

{{< /task >}}


{{< expand "Need Help?" "⬇" >}}


* Either run the following:
	
```bash
oc get csv -n cp4waiops                                                           
```
	
And you should see TODO entries with `Succeeded` state

```yaml
NAME                                     DISPLAY                                      VERSION   REPLACES                                 PHASE
ibm-aiops-orchestrator.v3.5.1            IBM Cloud Pak for Watson AIOps AIManager    3.5.1                                              Succeeded
ibm-automation-core.v1.3.11              IBM Automation Foundation Core               1.3.11    ibm-automation-core.v1.3.10              Succeeded
ibm-automation-elastic.v1.3.10           IBM Elastic                                  1.3.10    ibm-automation-elastic.v1.3.9            Succeeded
ibm-automation-eventprocessing.v1.3.11   IBM Automation Foundation Event Processing   1.3.11    ibm-automation-eventprocessing.v1.3.10   Succeeded
ibm-automation-flink.v1.3.10             IBM Automation Foundation Flink              1.3.10    ibm-automation-flink.v1.3.9              Succeeded
ibm-automation.v1.3.11                   IBM Automation Foundation                    1.3.11    ibm-automation.v1.3.10                   Succeeded
ibm-common-service-operator.v3.21.0      IBM Cloud Pak foundational services          3.21.0                                             Succeeded
```

* Or check your OpenShift Web Console

	1. Go to Operators Installed Operators 

	1. You should get this:

		![image](/cp4waiops-training/pics/53_operators_installed.png)
{{< /expand >}}


#


{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on Installing the Operator**\
Please continue to the next chapter to learn how to install AIManager.
{{< /hint >}}
