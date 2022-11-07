---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 43
---

# Check if all Training Resources have been installed and are are ready


{{< hint type=warning  title="Warning" >}}
**This takes up to 20 minutes**\
This takes some time depending on what region of ROKS you have chosen.\
❗ Wait for the installation to complete before continuing. \
The next step explains how to follow the installation progress.
{{< /hint >}}

You can follow along the process by running:
	
```bash
./tools/11_fzth/stream_remote_logs.sh                                                 
```

Or through the OpensHift Web Console:

* Select `default` Namespace
* Select `Pods`
* Click on the `waiops-easy-install-aimanager-practicum-...` Pod
* Select `Logs`

	![K8s CNI](/cp4waiops-training/pics/06_fzth_aimanager_load.png)

🚀 And **when done** you should get the following with `failed=0`.

```yaml

PLAY RECAP *********************************************************************
localhost                  : ok=XXX    changed=XXX    unreachable=0    failed=0    skipped=XXX    rescued=0    ignored=0



*****************************************************************************************************************************
 ✅ DONE
*****************************************************************************************************************************
                                                
```


{{< hint type=tip title="You have successfully finished this Chapter" >}}
**You are now done with the chapter on creating Training Resources**\
Please continue to the next chapter to learn how to Configure AIManager.
{{< /hint >}}