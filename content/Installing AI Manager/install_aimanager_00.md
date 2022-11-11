---
title: "Install AIManager"
date: 2022-11-03T10:57:46+01:00
weight: 31
---

# Creating the AIManager Instance

In this chapter you will install AIManager



{{< task title="Create the AIManager Instance" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli" >}}



![image](/cp4waiops-training/pics/54_aimanager_story.png)


Now it's time to create the AIManager instance.\
To do this create an instance of the AI Manager custom resource called ibm-cp-watson-aiops.


{{< /task >}}



{{< expand "Solution" "⬇" >}}

1. Run the following command to create an instance of AIManager.

   ```yaml
   cat << EOF | oc apply -f -
   apiVersion: orchestrator.aiops.ibm.com/v1alpha1
   kind: Installation
   metadata:
     name: ibm-cp-watson-aiops
     namespace: cp4waiops
   spec:
     enableConnectionModule: true
     imagePullSecret: ibm-entitlement-key
     license:
       accept: true
     pakModules:
     - name: aiopsFoundation
       enabled: true
     - name: applicationManager
       enabled: true
     - name: aiManager
       enabled: true
     - name: connection
       enabled: true
     size: small
     storageClass: ibmc-file-gold-gid
     storageClassLargeBlock: ibmc-block-gold
   EOF  
   ```

   ##


> This creates the `Installation` instance that the Operator will pick up and start the installation. 


{{< /expand >}}


#





{{< hint type=warning  title="Warning" >}}
**This takes up to 60 minutes**\
This takes some time depending on what region of ROKS you have chosen.\
❗ Wait for the installation to complete before continuing. \
The next step explains how to follow the installation progress.
{{< /hint >}}

{{< hint type=caution title="Warning" >}}
**This works only on IBM ROKS**\
If you want to install on another platform you will have to adapt storageClass and storageClassLargeBlock to your available storage classes.
{{< /hint >}}


