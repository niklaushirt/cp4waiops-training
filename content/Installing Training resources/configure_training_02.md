---
title: "Check Installation"
date: 2022-11-03T10:57:46+01:00
weight: 43
---

# Check the Training Resources 

{{< step title="Check if all Training Resources have been installed and are ready" >}}



{{< hint type=caution  title="Important" >}}
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

	![image](/cp4waiops-training/pics/06_fzth_aimanager_load.png)

✅ And **when done** you should get the following with `failed=0`.

```yaml

PLAY RECAP *********************************************************************
localhost                  : ok=XXX    changed=XXX    unreachable=0    failed=0    skipped=XXX    rescued=0    ignored=0



*****************************************************************************************************************************
 ✅ DONE
*****************************************************************************************************************************
                                                
```


{{< /step >}}