# RNTemplate
```React Native template with Configurations```

### Create new React Native Project with Typescript 

_with Template:_<br/>
**npx react-native init MyApp --template react-native-template-typescript**

_without Template:_<br/>
**npx react-native init MyApp**

_Add TypeScript and the types for React Native and Jest to your project:_<br/>
**npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer**

### Using Custom Path Aliases with TypeScript:
_Install this package:_<br/>
**yarn add babel-plugin-module-resolver**

**tsconfig.json**<br/>
```
{
  "compilerOptions": {
    "baseUrl": ".", 
    "paths": {
         "@*": ["src/*"],
         "@components/*": ["src/components/*"
         ],
    }
  }
}
```

**babel.config**<br/>
```
plugins: [
    [
       'babel-plugin-module-resolver',
       {
         root: ['./src'],
         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
         alias: {
           tests: ['./tests/'],
           "@components": "./src/components",
         }
       }
    ]
]
```

run **yarn tsc** to type-check your new TypeScript files

### Android

_To clean android build cache:_<br/>
**cd android && bash gradlew clean && cd .. && react-native run-android**



___

### Common Encountered Error/Issues:

**Issue 1:**
> Cannot read properties of undefined (reading 'transformFile')     at Bundler.transformFile .....

**Fix:**
```
npm install -g react-native-git-upgrade

npx react-native upgrade
```
___
**Issue 2:** 
> Execution failed for task ':app:installDebug'.
> java.util.concurrent.ExecutionException: com.android.builder.testing.api.DeviceException: com.android.ddmlib.InstallException: Unknown failure: cmd: Can't find service: package

**Fix:**
```
chmod 755 android/gradlew 

inside your app root folder then run 

react-native run-android 
```
___
**Issue 3:**
> Error message "error:0308010C:digital envelope routines::unsupported"

**Fix:**
```
nvm install --lts
nvm use --lts
```