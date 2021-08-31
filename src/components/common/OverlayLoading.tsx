import React from 'react'
import { Keyboard } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { ActivityIndicator } from 'react-native-paper'

interface IProps {
  visible: boolean
}

const OverlayLoadingComponent: React.FC<IProps> = ({ visible }) => {
  React.useEffect(() => {
    Keyboard.dismiss()
  }, [visible])

  return (
    <Spinner visible={visible} animation="fade" customIndicator={<ActivityIndicator size="large" color="#000" />} />
  )
}

export const OverlayLoading = React.memo(OverlayLoadingComponent)
