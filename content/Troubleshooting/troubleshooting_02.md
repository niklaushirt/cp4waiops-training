---
title: "Integration Problems"
date: 2022-11-03T10:57:46+01:00
weight: 303
---

# Integration Problems





## Slack integration not working

See [here](/cp4waiops-training/configure-ai-manager/configure_aimanager_09/)

<div style="page-break-after: always;"></div>



## Check if data is flowing

### Check  Log injection with Browser

1. Go to DemoUI
1. Select tab `System`
1. Select `Flink Connectors`
1. Click on `ELKInception3`
1. You should see values go up under `Records Sent` when launching incident creation

	![ibm](/cp4waiops-training/pics/59_flink_01.png)


### Check Log injection with CommandLine

To check if logs are being injected through the demo script:

1. Launch 

	```bash
	./tools/22_monitor_kafka.sh

2. Select option 5

You should see data coming in.

### Check Events injection with CommandLine

To check if events are being injected through the demo script:

1. Launch 

	```bash
	./tools/22_monitor_kafka.sh


2. Select option 4

You should see data coming in.

### Check Alerts and/or Stories being generated with CommandLine

To check if stories are being generated:

1. Launch 

	```bash
	./tools/22_monitor_kafka.sh

2. Select option 2 or 3

You should see data being generated.








## Monitor ElasticSearch Indexes with Browser

Run `./tools/28_access_elastic.sh` in a separate terminal window.

This allows you to access ElasticSearch and gives you:

* ES User
* ES Password

	![](/cp4waiops-training/pics/es0.png)
	

### Monitor ElasticSearch Indexes from Firefox

I use the [Elasticvue](https://addons.mozilla.org/en-US/firefox/addon/elasticvue/) Firefox plugin.

Follow these steps to connects from Elasticvue:

- Select `Add Cluster` 

	![](/cp4waiops-training/pics/es1.png)



- Put in the credentials and make sure you put `https` and not `http` in the URL

	![](/cp4waiops-training/pics/es2.png)

- Click `Test Connection` - you will get an error
- Click on the `https://localhost:9200` URL

	![](/cp4waiops-training/pics/es3.png)
	


- This will open a new Tab, select `Accept Risk and Continue` 

	![](/cp4waiops-training/pics/es4.png)

- Cancel the login screen and go back to the previous tab
- Click `Connect` 
- You should now be connected to your AI Manager ElasticSearch instance 

	![](/cp4waiops-training/pics/es5.png)



### Check ElasticSearch Indexes with CommandLine

1. Run 

    ```bash
    ./tools/28_access_elastic.sh
    ```

    in a separate terminal window.

    This allows you to access ElasticSearch.


1. Launch 

	```bash
	./tools/23_monitor_es.sh

2. Select option 5

You should see data coming in.

