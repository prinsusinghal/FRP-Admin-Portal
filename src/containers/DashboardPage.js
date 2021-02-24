import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import ActiveProjects from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/perm-identity';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Folder from 'material-ui/svg-icons/file/folder';
import InfoBox from '../components/dashboard/InfoBox';
import HomePieChart from '../components/dashboard/HomePieChart';
import RecentProjects from '../components/dashboard/RecentProjects';
import globalStyles from '../styles';
import Data from '../data';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>FRP / Admin Dashboard</h3>

      <div className="row">

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Folder}
                   color={pink600}
                   title="Total no. of Projects on FRP"
                   value="54"
          />
        </div>


        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ThumbUp}
                   color={cyan600}
                   title="Total no. of Appications on FRP"
                   value="229"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={ActiveProjects}
                   color={purple600}
                   title="Active Projects on FRP"
                   value="24"
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
          <InfoBox Icon={Face}
                   color={orange600}
                   title="Total No. of Students selected"
                   value="94"
          />
        </div>
      </div>


      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <RecentProjects data={Data.dashBoardPage.RecentProjectsData}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <HomePieChart data={Data.dashBoardPage.HomePieChartData}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
