---
title: "Configure Policies"
date: 2022-11-03T10:57:46+01:00
weight: 57
---

# Configure Policies

In this section you will enable a Policy to create Stories and create a Policy to assign a Runbook to a Story.

###

{{< task title="Enable Story creation Policy" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=policies-default-story-creation" >}}



AIManager provides two preset/of the box story creation policies. For story creation to occur, you must enable one of these default policies, or create your own custom story creation policy. These policies are disabled by default.
{{< /task >}}


{{< expand "Need Help?" "⬇" >}}




1. In the `AIManager` "Hamburger" Menu select `Operate`/`Automations`
1. Select tab `Policies`
1. Click on the `Tag` dropdown
1. Select `Stories` and `Runbooks`

	![image](/cp4waiops-training/pics/33_policy.png)

1. Turn on Policy `Default story creation policy for all alerts` 

	![image](/cp4waiops-training/pics/34_policy.png)
{{< /expand >}}

#


{{< task title="Create Runbook Assignment Policy" link="ttps://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=policies-assign-runbook-alerts" >}}



For this training, you want to have a runbook take action when you receive alerts stating that the MySQL database is not reachable. 
Create a policy to assign this runbook every time we get alerts related to a problem with the MySQL database.



{{< /task >}}

{{< expand "Need Help?" "⬇" >}}





1. Click on `Create Policy`
1. Click on `Assign a runbook to alerts`
1. Name it `RobotShop Mitigate MySQL Problem`
1. Scroll down to `Condition sets`
1. Click in field  `Property`
1. Type `name`
1. Select `resource` / `name`

	![image](/cp4waiops-training/pics/35_runbook.png)

1. Under `Operator` select `contains`
1. Click in field  `Value`
1. Type `mysql`
1. Select `String: mysql`

	![image](/cp4waiops-training/pics/36_runbook.png)


1. Check runbook `RobotShop Mitigate MySQL Problem`
1. Check `Use default parameter value`


	![image](/cp4waiops-training/pics/37_runbook.png)

1. Click `Create Policy`

1. Your list of Policies should now look like this

	![image](/cp4waiops-training/pics/38_runbook.png)


{{< /expand >}}