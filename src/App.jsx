import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import Media from 'react-media';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout, Button, Modal} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
import HomePage from "components/HomePage/HomePage";
const { Header, Footer } = Layout;

const styles = {
  content: {
    // display: "flex",
    justifyContent: "center",
    //fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: '64px',
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};


const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  const [inputValue, setInputValue] = useState("explore");

  //Burger show Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "fit-content", overflow: "auto"}}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <Media query="(min-width:600px)">
              {(matches) => matches ? (
                <SearchCollections setInputValue={setInputValue}/>
              ) : (<span></span>)
            }
          </Media>
          <Menu className="mainMenu"
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["HomePage"]}
          >
            <Menu.Item key="HomePage">
              <NavLink to="/HomePage">📑 Last collection</NavLink>
            </Menu.Item>
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 My NFTs</NavLink>
            </Menu.Item>
          </Menu>
          <button style={{border:'none', backgroundColor:'transparent'}} onClick={showModal}>
          <a href="#">
            <div className="burgerMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </a>
          </button>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <Modal 
        title="Menu" 
        theme="dark"
        visible={isModalVisible}
        okText="Close"
        cancelButtonProps={{disabled:true}}
        onOk={handleOk} 
        onCancel={handleCancel}>
          <div className="burgerMenuModal">
            <ul>         
              <li><NavLink to="/HomePage">📑 Last collection</NavLink></li>
              <li><NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink></li>
              <li><NavLink to="/nftBalance">✨ My NFTs</NavLink></li>
            </ul>
          </div>
      </Modal>
        <div style={styles.content}>
          <Media query="(max-width:600px)">
            {matches => matches ? 
              <SearchCollections setInputValue={setInputValue}/> : <span></span>
            }
          </Media>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/HomePage">
              <HomePage />
            </Route>
          </Switch>
          <Redirect to="/HomePage" />
        </div>
      </Router>
      {/* <Footer></Footer> */}
    </Layout>
  );
};

export const Logo = () => (
  <div style={{ display: "flex", fontWeight: "bold", fontSize: "25px" }}>
    COMIC
  </div>
);

export default App;
