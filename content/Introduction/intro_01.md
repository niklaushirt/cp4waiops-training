---
title: "Course Nomenclature"
date: 2022-11-03T10:57:46+01:00
weight: 3
---

# Example course page



![image](/cp4waiops-training/pics/60_nomenclature.png)

# Navigation

You can advance with the blue `Next` Button on the top right/bottom right.




# Course Elements 

You will find the following elements in the course:

### 📥 Step

{{< step >}}
  This is an example Step
{{< /step >}}

This is a step that you have to perform to advance in the course.\
This is not part of the actual installation of AIManager and the commands are not hidden. So you just have to follow the instructions of the `Task`.

###

### 📥 Task

{{< task title="Example Task" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=manager-starter-installation-cli" >}}
  This is an example Task
{{< /task >}}

This is a task that you have to perform to advance in the course.\
You should use the `Link to the Documentation` to try to figure out how to complete the step.\
If you get stuck or want to progress your installation rapidly you can click on the `Solution` and follow the outlined steps.




###

### 📥 Solution to the current task

This gives you a step-by-step solution to the `Task` at hand.\
💡 Click on the `Solution` below to test it and see more details.

{{< expand "Need Help?" "⬇" >}}

1. This is an `example command` that you have to copy and execute in your terminal and that will create a Kubernetes Object

   ```yaml
   cat << EOF | oc apply -f -
   apiVersion: operators.coreos.com/v1alpha1
   kind: MyKind
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
   ###

1. This is an `example command` that you have to copy and execute in your terminal and that will execute Shell commands

   ```bash
   oc create secret docker-registry ibm-entitlement-key \
       --docker-username=cp\
       --docker-password=_entitlement-key_ \
       --docker-server=cp.icr.io \
       --namespace=cp4waiops
   ```

   ###

1. This is a Note or Remark

    > You can use the copy button at the top right (when you hover over the code) of the code block to easily copy the whole block.


{{< /expand >}}


###

### 📥 Additional Information and Warnings

{{< hint type=caution  title="Important" >}}
**Example**\
❗ Example Remark
{{< /hint >}}