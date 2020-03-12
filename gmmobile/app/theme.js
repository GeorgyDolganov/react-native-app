import {Platform} from "react-native";

export let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';
export let titleColor = '#363434';

export const imageOptions = {allowsEditing: true, aspect: [4, 3]};