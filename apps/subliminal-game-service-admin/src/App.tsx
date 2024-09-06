import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClickPatternList } from "./clickPattern/ClickPatternList";
import { ClickPatternCreate } from "./clickPattern/ClickPatternCreate";
import { ClickPatternEdit } from "./clickPattern/ClickPatternEdit";
import { ClickPatternShow } from "./clickPattern/ClickPatternShow";
import { ScoreList } from "./score/ScoreList";
import { ScoreCreate } from "./score/ScoreCreate";
import { ScoreEdit } from "./score/ScoreEdit";
import { ScoreShow } from "./score/ScoreShow";
import { AffirmationList } from "./affirmation/AffirmationList";
import { AffirmationCreate } from "./affirmation/AffirmationCreate";
import { AffirmationEdit } from "./affirmation/AffirmationEdit";
import { AffirmationShow } from "./affirmation/AffirmationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SubliminalGameService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ClickPattern"
          list={ClickPatternList}
          edit={ClickPatternEdit}
          create={ClickPatternCreate}
          show={ClickPatternShow}
        />
        <Resource
          name="Score"
          list={ScoreList}
          edit={ScoreEdit}
          create={ScoreCreate}
          show={ScoreShow}
        />
        <Resource
          name="Affirmation"
          list={AffirmationList}
          edit={AffirmationEdit}
          create={AffirmationCreate}
          show={AffirmationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
