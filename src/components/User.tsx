import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

export function User(){
    return(
        <View className="items-center">
            <Avatar className= "border-4 border-gray-600">
                <AvatarImage source={{uri: "https://github.com/AndreLeite121.png"}}/>
                <AvatarFallback>RG</AvatarFallback>
            </Avatar>
            <Text className="text-white font-bold text-2xl mt-4">
                André Leite</Text>
            <Text className="text-gray-400 text-lg">
                @AndreLeite121</Text>
        </View>
    )
}