---
title: "Install AI Manager"
date: 2022-11-03T10:57:46+01:00
weight: 31
---

# Creating the AI Manager Instance


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

This takes some time depending on what region of ROKS you have chosen.
Wait **up to 45 minutes** for the installation to complete.


> This works only on IBM ROKS. 
> If you want to install on another platform you will have to adapt storageClass and storageClassLargeBlock to your available storage classes.