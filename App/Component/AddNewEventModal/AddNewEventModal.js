import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal"

const AddNewEventModal = ({toggleAddNewEventModal, addNewEventVisiable}) => {
  return (
    <Modal isVisible={addNewEventVisiable}>
      <View>
        <View style={styles.container}>
          {/* -------------------------- */}
          {/* ----------- Back Arrow button ----------- */}
          {/* -------------------------- */}
          <View style={styles.topBarContainer}>
            <TouchableOpacity
              onPress={toggleAddNewEventModal}
              style={styles.modalArrowIcon}
            >
              <ArrowLeft />
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={toggleAddNewEventModal}
            >
              <CrossIcon />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.bottomBorder}></View> */}
          {/* -------------------------- */}
          {/* ----------- Main View Start form here ----------- */}
          {/* -------------------------- */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.subContainer}>
              {/* -------------------------- */}
              {/* ----------- Header container ----------- */}
              {/* -------------------------- */}
              <View style={styles.headerContainer}>
                <CrowdIcon />
                <Text style={styles.headerText}>Update Crowd</Text>
              </View>
              {/* -------------------------- */}
              {/* ----------- Crowd Name Container ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Crowd Name *</Text>
                <TextInput placeholderTextColor={"rgba(84, 106, 126, 1)"} style={styles.inputField} placeholder="Group Name" />
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Crowd Description</Text>
                <TextInput
                placeholderTextColor={"rgba(84, 106, 126, 1)"}
                  style={[
                    styles.inputField,
                    { paddingBottom: responsiveScreenHeight(8) },
                  ]}
                  placeholder="Enter Crowd Description"
                />
              </View>
              {/* -------------------------- */}
              {/* ----------- Custom dropdown menu ----------- */}
              {/* -------------------------- */}
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Crowd Type</Text>
                <CustomDropDown options={options}/>
              </View>
              <View style={styles.fieldContainer}>
                <Text style={styles.Text}>Read Only</Text>
                <TextInput placeholderTextColor={"rgba(84, 106, 126, 1)"} style={styles.inputField} placeholder="No" />
              </View>
              <View style={{ 
    borderBottomWidth: 0.5,
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
  }}></View>
              <View style={styles.buttonContainer}>
                <CustomButton
                  toggleModal={toggleCrowdFromModal}
                  textColor="#27ac1f"
                  backgroundColor="rgba(39, 172, 31, 0.1)"
                  buttonText="Cancel"
                />
                <CustomButton
                  toggleModal={toggleCrowdFromModal}
                  textColor="white"
                  backgroundColor="#27ac1f"
                  buttonText="Update"
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

export default AddNewEventModal

const styles = StyleSheet.create({})