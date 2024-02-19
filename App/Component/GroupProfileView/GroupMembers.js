import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchAndFilter from "../SearchAndFilter";
import { responsiveHeight } from "react-native-responsive-dimensions";
import GroupMemberInfo from "./GroupMemberInfo";

const GroupMembers = () => {
  const data = [
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Admin",
      status: "Online"
    },
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Moderator",
      status: "Online"
    },
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
  ]
  return (
    <View style={styles.groupTabViewContainer}>
      <SearchAndFilter />
      <View style={{paddingTop: responsiveHeight(0.7)}}>
        {
          data.map((item, index)=> <GroupMemberInfo key={index} item={item} index={index}/>)
        }
      </View>
    </View>
  );
};

export default GroupMembers;

const styles = StyleSheet.create({
  groupTabViewContainer: {
    paddingTop: responsiveHeight(0.5),
  },
});
