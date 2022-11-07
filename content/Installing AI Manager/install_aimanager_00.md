---
title: "Install AI Manager"
date: 2022-11-03T10:57:46+01:00
weight: 31
---

# Creating the AI Manager Instance


![K8s CNI](/cp4waiops-training/pics/54_aimanager_story.png)


Now it's time to create the AI Manager instance




1. Run the following command to create an instance of AI Manager.

   ```yaml
   cat << EOF | oc apply -f -
   apiVersion: orchestrator.aiops.ibm.com/v1alpha1
   kind: Installation
   metadata:
     name: ibm-cp-watson-aiops
     namespace: cp4waiops
   spec:
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
       enabled: false
     size: small
     storageClass: ibmc-file-gold-gid
     storageClassLargeBlock: ibmc-block-gold
   EOF  
   ```

{{< hint type=info title="Info" >}}
This creates the `Installation` instance that the Operator will pick up and start the installation. 
{{< /hint >}}



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


