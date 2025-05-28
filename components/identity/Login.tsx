import React from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";

export default (props: any) => {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground 
				// source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/i0fg606t_expires_30_days.png"}} 
				resizeMode = {'stretch'}
				style={styles.view}
				>
				<View style={styles.mainContainer}>
					<View style={styles.spacer} />
					<ScrollView style={styles.scrollView}>
						<View style={styles.column}>
							<Text style={styles.text}>
								{"Sign In To freud.ai"}
							</Text>
							<View style={styles.column2}>
								<View style={styles.column3}>
									<Text style={styles.text2}>
										{"Email Address"}
									</Text>
									<View style={styles.inputContainer}>
										<View style={styles.row2}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/wr2429hb_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={styles.image4}
											/>
											<Text style={styles.text3}>
												{"princesskaguya@gmail.co"}
											</Text>
										</View>
									</View>
								</View>
								<View style={styles.column3}>
									<Text style={styles.text2}>
										{"Password"}
									</Text>
									<View style={styles.passwordContainer}>
										<View style={styles.row4}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/kp29ndhl_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={styles.image4}
											/>
											<Text style={styles.text4}>
												{"Enter your password..."}
											</Text>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/4d8yb1fe_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image5}
										/>
									</View>
								</View>
								<TouchableOpacity style={styles.button} onPress={()=>alert('Pressed!')}>
									<View style={styles.row5}>
										<Text style={styles.text5}>
											{"Sign In"}
										</Text>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/0bcj2x4z_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={styles.image5}
										/>
									</View>
								</TouchableOpacity>
							</View>
							<View style={styles.socialRow}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/jqqyupn8_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.socialIcon}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/7di4uxdj_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.socialIcon}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/HNdM5fIgaT/jkc7m1ou_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={styles.socialIconLast}
								/>
							</View>
							<View style={styles.column4}>
								<Text style={styles.text6}>
									{"Don't have an account? "}
									<Text style={styles.signUpText}>{"Sign Up"}</Text>
								</Text>
								<Text style={styles.text7}>
									{"Forgot Password"}
								</Text>
							</View>
						</View>
					</ScrollView>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	view: {
		flex: 1,
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	spacer: {
		flex: 1,
	},
	scrollView: {
		flex: 0,
	},
	column: {
		alignItems: "center",
		marginHorizontal: 20,
		paddingHorizontal: 16,
		paddingBottom: 40,
	},
	column2: {
		alignSelf: "stretch",
		marginBottom: 32,
	},
	column3: {
		marginBottom: 20,
	},
	column4: {
		alignItems: "center",
		marginBottom: 32,
	},
	image4: {
		width: 20,
		height: 20,
		marginRight: 12,
	},
	image5: {
		width: 20,
		height: 20,
	},
	socialIcon: {
		width: 48,
		height: 48,
		marginRight: 16,
	},
	socialIconLast: {
		width: 48,
		height: 48,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	row4: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 12,
	},
	row5: {
		flexDirection: "row",
		alignItems: "center",
	},
	socialRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 32,
	},
	text: {
		color: "#4E3321",
		fontSize: 24,
		fontWeight: "600",
		textAlign: "center",
		marginBottom: 40,
	},
	text2: {
		color: "#4E3321",
		fontSize: 14,
		fontWeight: "500",
		marginBottom: 8,
	},
	text3: {
		color: "#2C2C2C",
		fontSize: 16,
		fontWeight: "400",
	},
	text4: {
		color: "#999999",
		fontSize: 16,
		fontWeight: "400",
		flex: 1,
	},
	text5: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "600",
		marginRight: 8,
	},
	text6: {
		color: "#666666",
		fontSize: 14,
		fontWeight: "400",
		marginBottom: 12,
		textAlign: "center",
	},
	signUpText: {
		color: "#EC7D1C",
		fontWeight: "500",
	},
	text7: {
		color: "#EC7D1C",
		fontSize: 14,
		fontWeight: "500",
	},
	inputContainer: {
		backgroundColor: "#FFFFFF",
		borderRadius: 25,
		paddingHorizontal: 16,
		paddingVertical: 16,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	button: {
		alignItems: "center",
		backgroundColor: "#4E3321",
		borderRadius: 25,
		paddingVertical: 18,
		marginBottom: 32,
	},
});
