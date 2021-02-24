import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'New Project', icon: <Web/>, link: '/newprojectform' },
    { text: 'View Projects', icon: <GridOn/>, link: '/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: '/login' }
  ],
  tablePage: {
    items: [
      {id: 1, projectname: 'Project 1', eligibility: 'B.tech'},
      {id: 2, projectname: 'Project 2', eligibility: 'M.Tech'},
      {id: 3, projectname: 'Project 3', eligibility: 'PhD'},
      {id: 4, projectname: 'Project 4', eligibility: 'B.Tech'},
      {id: 5, projectname: 'Project 5', eligibility: 'B.Tech'},
      {id: 6, projectname: 'Project 6', eligibility: 'B.Tech'},
      {id: 7, projectname: 'Project 7', eligibility: 'M.Tech'},
      {id: 8, projectname: 'Project 8', eligibility: 'M.Tech'}
    ]
  },
  dashBoardPage: {
    RecentProjectsData: [
      {id: 5, title: 'Project 5', text: 'Description of Project 5'},
      {id: 4, title: 'Project 4', text: 'Description of Project 4'},
      {id: 3, title: 'Project 3', text: 'Description of Project 3'},
      {id: 2, title: 'Project 2', text: 'Description of Project 2'}
    ],
    
    HomePieChartData: [
      {name: 'Project 1', value: 800, color: cyan600, icon: <ExpandMore/>},
      {name: 'Project 2', value: 300, color: pink600, icon: <ChevronRight/>},
      {name: 'Project 3', value: 300, color: purple600, icon: <ExpandLess/>}
    ]
  }
};

export default data;
