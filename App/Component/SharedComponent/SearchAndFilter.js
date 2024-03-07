import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { Popover, PopoverController } from "react-native-modal-popover";
import Fonts from "../../../assets/Fonts/Fonts";
import CrossIcon from "../../../assets/svgs/CrossIcon";
import { RadioButton } from "react-native-paper";

const SearchAndFilter = () => {
  const [value, setValue] = React.useState("hour");
  return (
    <View style={SearchAndFilterStyles.topContainer}>
      <View style={SearchAndFilterStyles.inputField}>
        <TextInput
          style={SearchAndFilterStyles.textInput}
          placeholder="Search..."
          placeholderTextColor="rgba(99, 99, 99, 1)"
        />
        <Feather style={SearchAndFilterStyles.inputFieldIcon} name="search" />
      </View>

      <PopoverController>
        {({
          openPopover,
          closePopover,
          popoverVisible,
          setPopoverAnchor,
          popoverAnchorRect,
        }) => (
          <React.Fragment>
            <TouchableOpacity
              ref={setPopoverAnchor}
              onPress={openPopover}
              activeOpacity={0.8}
              style={SearchAndFilterStyles.filterButton}
            >
              <Feather
                name="filter"
                size={24}
                color="black"
                style={SearchAndFilterStyles.filterButtonIcon}
              />
              <Text style={SearchAndFilterStyles.filterButtonText}>Filter</Text>
            </TouchableOpacity>
            <Popover
              contentStyle={SearchAndFilterStyles.content}
              arrowStyle={SearchAndFilterStyles.arrow}
              backgroundStyle={SearchAndFilterStyles.background}
              visible={popoverVisible}
              onClose={closePopover}
              fromRect={popoverAnchorRect}
              placement="bottom"
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={SearchAndFilterStyles.container}>
                {/* -------------------------- */}
                {/* ----------- Heading Text ----------- */}
                {/* -------------------------- */}
                <View style={SearchAndFilterStyles.headerContainer}>
                  <Text style={SearchAndFilterStyles.headerText}>Filters</Text>
                  <TouchableOpacity activeOpacity={0.8} onPress={closePopover}>
                    <View style={SearchAndFilterStyles.cancelButton}>
                      <CrossIcon />
                    </View>
                  </TouchableOpacity>
                </View>
                {/* -------------------------- */}
                {/* ----------- Radio button ----------- */}
                {/* -------------------------- */}
                <RadioButton.Group
                  onValueChange={(newValue) => setValue(newValue)}
                  value={value}
                >
                  <View style={[SearchAndFilterStyles.radioButton]}>
                    <RadioButton
                      value="hour"
                      color="rgba(253, 40, 43, 1)"
                      uncheckedColor="rgba(0, 0, 0, 0.2)"
                    />
                    <Text
                      style={[
                        SearchAndFilterStyles.radioText,
                        {
                          color:
                            value === "hour" ? "black" : "rgba(0, 0, 0, 0.6)",
                          fontFamily: "Inter-Regular",
                        },
                      ]}
                    >
                      Block user
                    </Text>
                  </View>
                  <View
                    style={{
                      marginVertical: responsiveScreenHeight(0.5),
                      borderBottomColor: "rgba(0, 0, 0, 0.6)",
                      borderBottomWidth: 0.5,
                    }}
                  ></View>
                  <View style={SearchAndFilterStyles.radioButton}>
                    <RadioButton
                      color="rgba(253, 40, 43, 1)"
                      value="day"
                      uncheckedColor="rgba(0, 0, 0, 0.2)"
                    />
                    <Text
                      style={[
                        SearchAndFilterStyles.radioText,
                        {
                          color:
                            value === "day" ? "black" : "rgba(0, 0, 0, 0.6)",
                          fontFamily: "Inter-Regular",
                        },
                      ]}
                    >
                      Mute user
                    </Text>
                  </View>
                </RadioButton.Group>
              </View>
            </Popover>
          </React.Fragment>
        )}
      </PopoverController>
    </View>
  );
};

export default SearchAndFilter;

const SearchAndFilterStyles = StyleSheet.create({
  // --------------------------
  // ----------- Radio Button -----------
  // --------------------------
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonGroup: {
    marginHorizontal: responsiveScreenWidth(-1),
  },
  radioText: {
    fontSize: responsiveScreenFontSize(1.9),
  },
  // --------------------------
  // ----------- Header of the popup -----------
  // --------------------------
  headerText: {
    fontFamily: "Inter-SemiBold",
    fontSize: responsiveScreenFontSize(2.5),
  },
  cancelButton: {
    backgroundColor: "#D0D0D0",
    padding: responsiveScreenWidth(2.5),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveScreenHeight(1),
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: responsiveScreenWidth(2.2),
    alignItems: "center",
  },

  filterButton: {
    flexDirection: "row",
    backgroundColor: "#27ac1f",
    alignItems: "center",
    gap: responsiveScreenWidth(2.6),
    paddingVertical: responsiveScreenWidth(2.6),
    paddingHorizontal: responsiveScreenWidth(4),
    borderRadius: responsiveScreenWidth(1.5),
  },
  inputField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    padding: responsiveScreenWidth(1.5),
    paddingHorizontal: responsiveScreenWidth(3.3),
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    flex: 1,
    borderRadius: responsiveScreenWidth(2),
  },
  inputFieldIcon: {
    fontSize: responsiveScreenFontSize(2.5),
    color: "rgba(99, 99, 99, 1)",
  },
  textInput: {
    fontSize: responsiveScreenFontSize(1.6),
  },
  filterButtonIcon: {
    fontSize: responsiveScreenFontSize(2),
    color: "white",
  },
  filterButtonText: {
    fontSize: responsiveScreenFontSize(1.9),
    fontFamily: "Inter-Regular",
    color: "white",
  },
  threeDotIcon: {
    paddingHorizontal: responsiveScreenWidth(1),
  },
  buttonText: {
    fontSize: responsiveScreenFontSize(2),
    color: "#666",
  },
  iconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveScreenWidth(3),
  },
  buttonContainer: {
    paddingVertical: responsiveScreenHeight(1.5),
    paddingHorizontal: responsiveScreenWidth(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
  },
  // --------------------------
  // ----------- Popup Modal container -----------
  // --------------------------
  content: {
    borderRadius: 8,
  },
  container: {
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(2),
    minWidth: responsiveScreenWidth(50),
  },
});
