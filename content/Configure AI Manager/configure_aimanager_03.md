---
title: "Configure LDAP"
date: 2022-11-03T10:57:46+01:00
weight: 54
---

# Configure LDAP integration

# Create LDAP provider


1. In the `AI Manager` "Hamburger" Menu select `Access Control`

	![K8s CNI](/cp4waiops-training/pics/20_config.png)

1. In the top right Click `Identity provider configuration`

1. You might have to re-login with your admin user

1. In the top right Click `New Connection`

1. Select `LDAP` from the dropdown

1. Click `Next`

1. 🔎 Get the data from your configuration info - section  `2.1 Configure LDAP` 

    ```bash
    ./tools/11_fzth/get_configuration_info.sh
    ```


1. Fill out the first section of fields:

	![K8s CNI](/cp4waiops-training/pics/21_config.png)

    ```yaml
    Connection name:      LDAP
    Server type:          Custom

    Base DN:              dc=ibm,dc=com
    Bind DN:              cn=admin,dc=ibm,dc=com
    Bind DN password:     P4ssw0rd! 

    LDAP server URL:      ldap://openldap.openldap:389

    ```

1. Click `Test connection`. You should get `Successful connection`

1. Fill out the rest of the fields:

	![K8s CNI](/cp4waiops-training/pics/22_config.png)

    ```yaml
    Group filter:         (&(cn=%v)(objectclass=groupOfUniqueNames))
    User filter:          (&(uid=%v)(objectclass=Person))     <-- Thats the only value you should have to change
    Group ID map:         *:cn
    User ID map:          *:uid
    Group member ID map:  groupOfUniqueNames:uniqueMember
    ```


1. Click `Create`

1. You should get a LDAP entry in the provider list

	![K8s CNI](/cp4waiops-training/pics/23_config.png)



# Create User

1. Go back to `AI Manager`, click on the "Hamburger" Menu and select `Access Control`

	![K8s CNI](/cp4waiops-training/pics/20_config.png)

1. In the top right Click `Add users`

1. In the search box type `demo`

1. Click on the `demo/demo/demo@ibm.com` line

1. Click `Next` 

1. Click `Assign roles directly`

1. Click `Next` 

1. Check `Administrator` role

1. Click `Next` 

1. Click `Add` 


# Login as Demo

1. In `AI Manager`, click on the round image in the top right and select `Log Out`

	![K8s CNI](/cp4waiops-training/pics/24_config.png)

1. Click `Logout` 

1. Click `Log in` 

1. Enter credentials `demo` and `P4ssw0rd!` (this information is stored in the LDAP server)

1. Welcome back in AI Manager as user Demo