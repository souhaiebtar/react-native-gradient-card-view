import { Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const deviceWidth = width;

export const _gradientColors = [
  "rgba(85,96,127,1.0)",
  "rgba(68, 79, 112, 1.0)",
  "rgba(48, 58, 87,1.0)"
];

export const _shadowStyle = {
  ...Platform.select({
    ios: {
      shadowColor: "#595959",
      shadowOffset: {
        width: 1,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 0.5
    },
    android: {
      elevation: 3
    }
  })
};

export function _outerContainer(height, width, borderRadius) {
  return {
    height: height || 70,
    borderRadius: borderRadius || 20,
    width: width || deviceWidth * 0.95
  };
}

export function _imageStyle(imageWidth, imageHeight, imageBorderRadius) {
  return {
    width: imageWidth || 35,
    height: imageHeight || 35,
    borderRadius: imageBorderRadius || 10
  };
}

export default {
  innerContainer: {
    flex: 1,
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    alignSelf: "flex-start",
    justifyContent: "center"
  },
  column: { flexDirection: "column" },
  titleStyle: {
    color: "white",
    marginLeft: 8,
    textAlign: "left",
    fontWeight: "bold"
  },
  subtitleStyle: {
    fontSize: 12,
    marginLeft: 8,
    color: "#E2E2E2",
    textAlign: "left"
  },
  centerTextContainer: {
    marginLeft: width * 0.1
  },
  centerTitleStyle: {
    marginLeft: 8,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  centerSubtitleStyle: {
    fontSize: 12,
    marginLeft: 8,
    textAlign: "center",
    color: "rgba(163, 224, 97, 1.0)"
  },
  rightContainer: { left: 40 }
};