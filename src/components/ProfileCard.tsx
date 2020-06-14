import React from "react"
import { View } from "react-native"
import { H1 } from "@expo/html-elements"

export type ProfileCardProps = {
  data: any
}

const ProfileCard = ({ data }: ProfileCardProps) => {
  const { title } = data.site.siteMetadata

  return (
    <View>
      <H1>{title}</H1>
    </View>
  )
}

export default ProfileCard
