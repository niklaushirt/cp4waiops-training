---
title: "Configure Runbooks"
date: 2022-11-03T10:57:46+01:00
weight: 56
---

# Configure Runbooks

In this section you will create the connection to Ansible Tower and create your first Runbook.

###

{{< task title="Create the Ansible Tower Connection" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=connections-ansible" >}}
Create the connection to Ansible Tower using the following parameters:

```yaml
URL for REST API:      from MY_CONFIGURATION.txt
Authentication type:   User ID/Password
User:                  admin
Password:              from MY_CONFIGURATION.txt
```

{{< /task >}}



{{< expand "Need Help?" "⬇" >}}





1. In the `AIManager` "Hamburger" Menu select `Define`/`Data and tool connections`
1. Click `Add connection`
1. Under `Ansible Automation Controller`, click on `Add connection`
1. Click `Connect`


1. 🔎 Get the data from your configuration file `MY_CONFIGURATION.txt` - section  `2.3 Configure Runbooks - Ansible Automation Controller`

    ```bash
    ./tools/11_fzth/get_configuration_info.sh > MY_CONFIGURATION.txt
    ```

1. Fill out the fields:

	![image](/cp4waiops-training/pics/29_runbook.png)


	```yaml
	URL for REST API:      from MY_CONFIGURATION.txt
	Authentication type:   User ID/Password
	User:                  admin
	Password:              from MY_CONFIGURATION.txt
	

1. Click `Done`

1. Make sure that the Connection Status turn green after a few seconds




## Check integration


1. In the `AIManager` "Hamburger" Menu select `Operate`/`Automations`
1. Select tab `Actions`
1. Verify that the Ansible Playbooks have been imported

	![image](/cp4waiops-training/pics/30_runbook.png)



{{< /expand >}}

#


{{< task title="Create a Runbook" link="https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.5.0?topic=library-create-runbook" >}}
Create a Runbook based on the `CP4WAIOPS Mitigate Robotshop Ratings Outage` Ansible Playbook
{{< /task >}}




{{< expand "Need Help?" "⬇" >}}




1. Select tab `Runbooks`
1. Click `Create Runbook`
1. Name it `RobotShop Mitigate MySQL Problem`
1. Click `Add automated step`
1. Select `CP4WAIOPS Mitigate Robotshop Ratings Outage`
1. Click `Select this action`
1. Click `Mapping` / `Select`
1. Select `New runbook parameter`

	![image](/cp4waiops-training/pics/31_runbook.png)

1. Select tab 


1. 🔎 Get the data from your configuration file `MY_CONFIGURATION.txt` - section  `2.4 Configure Runbooks - Runbook Parameters` 

    ```bash
    ./tools/11_fzth/get_configuration_info.sh > MY_CONFIGURATION.txt
    ```

	![image](/cp4waiops-training/pics/32_runbook.png)

1. Replace `PROVIDE: my_k8s_apiurl and my_k8s_apikey` in field `Default value (optional)` with the value from the script

1. Click `Save`
1. Click `Save` again
1. Click `Actions` and `Publish`

{{< /expand >}}