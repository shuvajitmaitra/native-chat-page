import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import ThreeDotGrayIcon from '../../../assets/svgs/ThreeDotGrayIcon'
import Fonts from '../../../assets/Fonts/Fonts'

const GroupMemberInfo = ({item, index}) => {
  return (

      <View style={[styles.container, {  borderTopColor: index ? "rgba(0, 0, 0, 0.1)": "white"}]}>
        {/* -------------------------- */}
        {/* ----------- Profile Image ----------- */} 
        {/* -------------------------- */}
        <View style={styles.profileImageContainer}>
          <View>
            <Image style={styles.profileImage} source={item.profileImage} />
          </View>
          <View>
            <Text style={styles.profileName}>{item.userName} {item.role==="Member" || <Text style={styles.roleText}>{`(${item.role})`}</Text>}</Text>
            <Text style={[styles.status, {color: item.status ==="Online" ? "#06AC6D" : "#666666"} ]}>{item.status}</Text>
          </View>
        </View>
        {/* -------------------------- */}
        {/* ----------- Comment time ----------- */}
        {/* -------------------------- */}
        <View>
      <ThreeDotGrayIcon/>
        </View>
      </View>
  )
}

export default GroupMemberInfo

const styles = StyleSheet.create({
  roleText:{
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Inter-Regular",
    fontSize: responsiveScreenFontSize(1.5)
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: responsiveScreenHeight(1),
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0.1)",
  },
  profileImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(4),
  },
  profileImage: {
    width: responsiveScreenWidth(10),
    height: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(100),
    resizeMode: "cover",
    position: "relative",
  },
  profileName: {
    fontSize: responsiveScreenFontSize(2),

    fontWeight: "500",
    color: "black",
    fontFamily: "Inter-Medium"
  },
  status: {
    color: "rgba(11, 42, 70, 1)",
    fontSize: responsiveScreenFontSize(1.9),
    paddingVertical: responsiveScreenHeight(0.2),
  },
  commentsTime: {
    color: "rgba(111, 116, 124, 1)",
    fontSize: responsiveScreenFontSize(1.9),
  },
});