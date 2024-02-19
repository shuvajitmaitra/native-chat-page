import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SearchAndFilter from "../SearchAndFilter";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import GroupMemberInfo from "./GroupMemberInfo";
import ArrowRight from "../../../assets/svgs/ArrowRight";

const GroupMembers = () => {
  const data = [
    {
      userName: "Shiblu Ahmed",
      profileImage: require("../../../assets/man1.png"),
      role: "Admin",
      status: "Online"
    },
    {
      userName: "Srijan Mondol",
      profileImage: require("../../../assets/man2.png"),
      role: "Moderator",
      status: "Online"
    },
    {
      userName: "Salma Sarkar",
      profileImage: require("../../../assets/women1.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
    {
      userName: "William James",
      profileImage: require("../../../assets/man3.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
    {
      userName: "Olivia Smith",
      profileImage: require("../../../assets/man1.png"),
      role: "Member",
      status: "Last seen 9:30"
    },
    {
      userName: "Prokiti Haoladar",
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
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: responsiveWidth(2),
            paddingVertical: responsiveHeight(1),
          }}
        >
          <Text
            style={{
              color: "rgba(39, 172, 31, 1)",
              fontFamily: "Inter-SemiBold",
              fontSize: responsiveFontSize(1.8),
            }}
          >
            See More
          </Text>
          <ArrowRight />
        </TouchableOpacity>
    </View>
  );
};

export default GroupMembers;

const styles = StyleSheet.create({
  groupTabViewContainer: {
    paddingTop: responsiveHeight(0.5),
    // backgroundColor: "red"
  },
});
