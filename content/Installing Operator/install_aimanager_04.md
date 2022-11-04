---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 25
---

# Check Operator is ready

Verify that the Operator is running.

* Either run the following:
	
```bash
oc get csv -n cp4waiops                                                           
```
	
And you should see TODO entries with `Succeeded` state

```yaml
NAME                                     DISPLAY                                            VERSION   REPLACES                                 PHASE
aimanager-operator.v3.5.1                IBM Watson AIOps AI Manager                        3.5.1                                              Succeeded
aiopsedge-operator.v3.5.1                IBM Watson AIOps Edge                              3.5.1                                              Succeeded
asm-operator.v3.5.1                      IBM Netcool Agile Service Manager                  3.5.1                                              Succeeded
elasticsearch-operator.5.5.3             OpenShift Elasticsearch Operator                   5.5.3                                              Succeeded
ibm-aiops-ir-ai.v3.5.1                   IBM Watson AIOps Issue Resolution AI & Analytics   3.5.1                                              Succeeded
ibm-aiops-ir-core.v3.5.1                 IBM Watson AIOps Issue Resolution Core             3.5.1                                              Succeeded
ibm-aiops-ir-lifecycle.v3.5.1            IBM Cloud Pak for Watson AIOps Lifecycle           3.5.1                                              Succeeded
ibm-aiops-orchestrator.v3.5.1            IBM Cloud Pak for Watson AIOps AI Manager          3.5.1                                              Succeeded
ibm-automation-core.v1.3.11              IBM Automation Foundation Core                     1.3.11    ibm-automation-core.v1.3.10              Succeeded
ibm-automation-elastic.v1.3.10           IBM Elastic                                        1.3.10    ibm-automation-elastic.v1.3.9            Succeeded
ibm-automation-eventprocessing.v1.3.11   IBM Automation Foundation Event Processing         1.3.11    ibm-automation-eventprocessing.v1.3.10   Succeeded
ibm-automation-flink.v1.3.10             IBM Automation Foundation Flink                    1.3.10    ibm-automation-flink.v1.3.9              Succeeded
ibm-automation.v1.3.11                   IBM Automation Foundation                          1.3.11    ibm-automation.v1.3.10                   Succeeded
ibm-cloud-databases-redis.v1.4.3         IBM Operator for Redis                             1.4.3     ibm-cloud-databases-redis.v1.4.2         Succeeded
ibm-common-service-operator.v3.21.0      IBM Cloud Pak foundational services                3.21.0                                             Succeeded
ibm-management-kong.v3.5.1               IBM Internal - IBM Watson AIOps Kong               3.5.1                                              Succeeded
ibm-postgreservice-operator.v3.5.1       IBM Postgreservice                                 3.5.1                                              Succeeded
ibm-secure-tunnel-operator.v3.5.1        IBM Secure Tunnel                                  3.5.1                                              Succeeded
ibm-vault-operator.v3.5.1                IBM Vault Operator                                 3.5.1                                              Succeeded
ibm-watson-aiops-ui-operator.v3.5.1      IBM Watson AIOps UI                                3.5.1                                              Succeeded
```

* Or check your OpenShift Web Console

	![K8s CNI](/cp4waiops-training/pics/01_fzth_ocp_connect.png)



