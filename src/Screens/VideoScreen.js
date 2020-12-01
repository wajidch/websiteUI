import { useState } from 'react';
import '../App.css';
import { ItemCard, CaseCard, VideoCard, Nav, CategoryTextRow, SideDrawer } from '../Components'
import image from '../img.jpg'

function VideoScreen() {
  let recentVideos = [
    {
      src: image,
      title: "654321.mp4",
      description: "5 hours ago",
      size: "3 MB"
    },
    {
      src: image,
      title: "123456.mp4",
      description: "10 hours ago",
      size: "10 MB"
    },
    {
      src: image,
      title: "4145.mp4",
      description: "7 hours ago",
      size: "4 MB"
    },
  ]

  // let recentVideos;
  async function fetchvideos() {
   await fetch("https://aws-dev.xcellence.tech/vr_api/redact/get_video_list", {
      "method": "GET",
     
    })
    .then(response => response.json())
    .then(response => {
      console.log("respomse",response)
      recentVideos=response;
   
    })
    .catch(err => { console.log(err); 
    });
  }

  fetchvideos().then(data =>{
console.log("data got",data);
return (
  <div className="App">
    
    </div>
)

  })
  let Cases = [
    {
      title: "ID 2002",
      videos: 10,
      private: true,
    },
    {
      title: "ID 23",
      videos: 13,
      shared: true
    },
    {
      title: "ID 2402",
      videos: 5,
      private: true
    },
    {
      title: "ID 2002",
      videos: 10,
      private: true,
    },
    {
      title: "ID 23",
      videos: 13,
      shared: true
    },
    {
      title: "ID 2402",
      videos: 5,
      private: true
    },
  ]

  let myVideos = [
    {
      type: "MP4",
      name: "313124-1",
      size: "19 MB",
      status: "In Progress",
      time: "Today"
    },
    {
      type: "MP4",
      name: "313124-1",
      size: "19 MB",
      status: "In Progress",
      time: "Today"
    }, {
      type: "MP4",
      name: "313124-1",
      size: "19 MB",
      status: "In Progress",
      time: "Today"
    }, {
      type: "MP4",
      name: "313124-1",
      size: "19 MB",
      status: "In Progress",
      time: "Today"
    }, {
      type: "MP4",
      name: "313124-1",
      size: "19 MB",
      status: "In Progress",
      time: "Today"
    },
  ]



  let RowContents = [];
  const Contents = Cases.reduce((acc, item, i) => {
    RowContents.push(<CaseCard containerStyle={{ width: 100 + "%" }} title={item.title} videos={item.videos} private={item.private} shared={item.shared} />);
    if (i / 2 === 1) {
      acc.push(<div style={{ display: 'flex', flexDirection: 'row' }}>{RowContents}</div>);
      RowContents = [];
    }
    return acc;
  }, [])
  Contents.push(<div style={{ display: 'flex', flexDirection: 'row' }}>{RowContents}</div>);



  let style = {
    tableContainer: {
      display: 'flex',
      margin: 10,
      padding: 7,
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
    },
    tableLastIcon: {
      position: 'absolute',
      right: 0,
      marginRight: 10,
      fontSize: 1 + 'em',
      top: 50 + "%",
      transform: "translateY(-50%)",
    },
    tableTitle: {
      flex: 1,
      fontSize: 1 + 'em',
      fontWeight: 'bold',
      color: '#000',
      margin: 0
    },
  }

  const [shown, setShown] = useState(false)
  return (
    <div className="App">
      <SideDrawer shown={shown} />
      <div style={{ flex: 1, flexDirection: 'column', paddingRight: 10, paddingLeft: 10, height: 100 + "%", backgroundColor: 'rgb(219, 219, 219)' }}>


        <Nav src={image} rightIcon={
        <i className="fa fa-bars hover" onClick={()=>setShown(!shown)} style={{fontSize:2+'em',margin:'auto',marginRight:10,color:'#00c452'}}></i>
        } />


        {/* Recent */}
        <CategoryTextRow title="Recent Videos" rightTxt="View All" />
        <div style={{ display: 'flex', flexDirection: 'row' }} className="smVideos">
          {recentVideos.map((i) => <ItemCard containerClassName="itemCardSm" containerStyle={{width:100+"%"}} src={i.src} title={i.title} description={i.description} size={i.size} />)}
        </div>

        {/* Cases */}
        <CategoryTextRow title="Cases" rightTxt="View All" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {Contents}
        </div>

        {/* Videos */}
        <CategoryTextRow title="My Videos" rightTxt="View All" />
        <div style={style.tableContainer}>
          <h1 style={style.tableTitle}>Name</h1>
          <h1 style={style.tableTitle}>File Size</h1>
          <h1 style={style.tableTitle}>Status</h1>
          <h1 style={style.tableTitle}>Last Edited</h1>

          <i style={style.tableLastIcon} className="fa fa-arrow-down"></i>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {myVideos.map((i) => <VideoCard type={i.type} name={i.name} size={i.size} status={i.status} time={i.time} />)}
        </div>

      </div>

      <div style={{ flex: 0.3, background: 'white', flexDirection: 'column' }} className="hideSM">

        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', marginLeft: 10, marginBottom: 30, alignItems: 'center' }}>
          <button className="activeBtn hover">Activity</button>
          <button className="disactiveBtn hover">For Review</button>
        </div>

        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h2 style={{ margin: 0 }}>Today</h2>
              <ItemCard src={recentVideos[0].src} title={recentVideos[0].title} description={recentVideos[0].description} size={recentVideos[0].size} />
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2 style={{ margin: 0 }}>Yesterday</h2>
              <ItemCard src={recentVideos[0].src} title={recentVideos[0].title} description={recentVideos[0].description} size={recentVideos[0].size} />
            </div>
            <div className="content">
              <ItemCard src={recentVideos[0].src} title={recentVideos[0].title} description={recentVideos[0].description} size={recentVideos[0].size} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VideoScreen;