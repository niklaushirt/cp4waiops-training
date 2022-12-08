import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: '🐣 Quick Install',
    href: 'https://github.com/niklaushirt/cp4waiops-deployer#-1-quick-install',
  },  
  {
    title: '🚀 Ready-to-use environments' ,
    href: 'https://waiops-demo-reservation-ui-cp4waiops-demo-reservation.demoapps-a376efc1170b9b8ace6422196c51e491-0000.eu-gb.containers.appdomain.cloud/login',
  },
  {
    title: 'Github',
    href: 'https://github.com/niklaushirt/aiops-training',
  },


];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
