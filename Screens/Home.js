import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,View } from "react-native";
import AccountList from "./Home/AccountList"
import Forum from "./Home/Forum"
import MyAccount from "./Home/MyAccount";

const Tab= createBottomTabNavigator();

export default function Home(){
    return(
        <Tab.Navigator>
            <Tab.Screen component={AccountList} name="AccountList"></Tab.Screen>
            <Tab.Screen component={Forum} name="Forum"></Tab.Screen>
            <Tab.Screen component={MyAccount} name="MyAccount"></Tab.Screen>
        </Tab.Navigator>
    )
}