import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-neutral-100 dark:bg-slate-900 w-full h-full';
  const statusBarBackgroundColor = isDarkMode ? '#1e293b' : '#f5f5f5';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={statusBarBackgroundColor}
      />
      <Text className="bg-green-300 p-4 text-green-900 m-10 border border-solid border-green-900 rounded">
        Tailwind CSS in React Native (Nativewind)
      </Text>
    </SafeAreaView>
  );
}
export default App;
