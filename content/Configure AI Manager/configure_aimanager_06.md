---
title: "Configure Policies"
date: 2022-11-03T10:57:46+01:00
weight: 57
---

# Configure Policies

# Enable Story creation Policy


1. In the `AIManager` "Hamburger" Menu select `Operate`/`Automations`
1. Select tab `Policies`
1. Click on the `Tag` dropdown
1. Select `Stories` and `Runbooks`

	![K8s CNI](/cp4waiops-training/pics/33_policy.png)

1. Turn on Policy `Default story creation policy for all alerts` 

	![K8s CNI](/cp4waiops-training/pics/34_policy.png)


# Create Runbook Assignment Policy


1. Click on `Create Policy`
1. Click on `Assign a runbook to alerts`
1. Name it `RobotShop Mitigate MySQL Problem`
1. Scroll down to `Condition sets`
1. Click in field  `Property`
1. Type `name`
1. Select `resource` / `name`

	![K8s CNI](/cp4waiops-training/pics/35_runbook.png)

1. Under `Operator` select `contains`
1. Click in field  `Value`
1. Type `mysql`
1. Select `String: mysql`

	![K8s CNI](/cp4waiops-training/pics/36_runbook.png)


1. Check runbook `RobotShop Mitigate MySQL Problem`
1. Check `Use default parameter value`


	![K8s CNI](/cp4waiops-training/pics/37_runbook.png)

1. Click `Create Policy`

1. Your list of Policies should now look like this

	![K8s CNI](/cp4waiops-training/pics/38_runbook.png)


