---
title: API Reference (Generated)
sidebar_label: API (Generated)
description: Exhaustive auto-generated API reference for @rnforge/react-native-in-app-updates
---

> **This file is auto-generated. Do not edit by hand.**
>
> Source: `@rnforge/react-native-in-app-updates/src`  
> Source repository: `https://github.com/rnforge/react-native-in-app-updates`  
> Regenerate: `bun run gen:api`  
> Generated with: TypeDoc + typedoc-plugin-markdown

**@rnforge/react-native-in-app-updates**

***

# @rnforge/react-native-in-app-updates

## Classes

### InAppUpdatesError

Defined in: [react-native-in-app-updates/src/types.ts:163](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L163)

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new InAppUpdatesError(
   message, 
   code, 
   android?): InAppUpdatesError;
```

Defined in: [react-native-in-app-updates/src/types.ts:167](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L167)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `code` | [`InAppUpdatesErrorCode`](#inappupdateserrorcode) |
| `android?` | [`AndroidDetails`](#androiddetails) |

###### Returns

[`InAppUpdatesError`](#inappupdateserror)

###### Overrides

```ts
Error.constructor
```

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="code"></a> `code` | `readonly` | [`InAppUpdatesErrorCode`](#inappupdateserrorcode) | - | [react-native-in-app-updates/src/types.ts:164](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L164) |
| <a id="android-5"></a> `android?` | `readonly` | [`AndroidDetails`](#androiddetails) | - | [react-native-in-app-updates/src/types.ts:165](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L165) |
| <a id="cause"></a> `cause?` | `public` | `unknown` | `Error.cause` | rnforge.dev/node\_modules/typescript/lib/lib.es2022.error.d.ts:24 |
| <a id="name"></a> `name` | `public` | `string` | `Error.name` | rnforge.dev/node\_modules/typescript/lib/lib.es5.d.ts:1074 |
| <a id="message-1"></a> `message` | `public` | `string` | `Error.message` | rnforge.dev/node\_modules/typescript/lib/lib.es5.d.ts:1075 |
| <a id="stack"></a> `stack?` | `public` | `string` | `Error.stack` | rnforge.dev/node\_modules/typescript/lib/lib.es5.d.ts:1076 |

#### Methods

##### isError()

```ts
static isError(error): error is Error;
```

Defined in: rnforge.dev/node\_modules/typescript/lib/lib.esnext.error.d.ts:21

Indicates whether the argument provided is a built-in Error instance or not.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |

###### Returns

`error is Error`

###### Inherited from

```ts
Error.isError
```

## Type Aliases

### InstallStateListener

```ts
type InstallStateListener = (event) => void;
```

Defined in: [react-native-in-app-updates/src/addInstallStateListener.ts:4](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/addInstallStateListener.ts#L4)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`InstallStateEvent`](#installstateevent) |

#### Returns

`void`

***

### InstallStateSubscription

```ts
type InstallStateSubscription = {
  remove: () => void;
};
```

Defined in: [react-native-in-app-updates/src/addInstallStateListener.ts:6](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/addInstallStateListener.ts#L6)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="remove"></a> `remove` | () => `void` | [react-native-in-app-updates/src/addInstallStateListener.ts:7](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/addInstallStateListener.ts#L7) |

***

### Platform

```ts
type Platform = "android" | "ios";
```

Defined in: [react-native-in-app-updates/src/types.ts:1](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L1)

***

### UnsupportedReason

```ts
type UnsupportedReason = 
  | "unsupported-platform"
  | "unsupported-os-version"
  | "unsupported-install-source"
  | "apk-expansion-files-unsupported"
  | "missing-app-store-id"
  | "play-core-unavailable"
  | "store-lookup-unavailable"
  | "store-lookup-timeout"
  | "store-lookup-network-error"
  | "store-lookup-http-error"
  | "store-lookup-not-found"
  | "store-lookup-invalid-response";
```

Defined in: [react-native-in-app-updates/src/types.ts:3](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L3)

***

### AvailabilityReason

```ts
type AvailabilityReason = 
  | "update-available"
  | "no-update-available"
  | "developer-triggered-update-in-progress"
  | "flexible-update-downloaded"
  | "update-not-allowed"
  | "context-unavailable"
  | "activity-unavailable"
  | "user-canceled"
  | "unknown";
```

Defined in: [react-native-in-app-updates/src/types.ts:17](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L17)

***

### InstallStatus

```ts
type InstallStatus = 
  | "unknown"
  | "pending"
  | "downloading"
  | "downloaded"
  | "installing"
  | "installed"
  | "failed"
  | "canceled"
  | "unsupported";
```

Defined in: [react-native-in-app-updates/src/types.ts:28](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L28)

***

### InstallStateEventReason

```ts
type InstallStateEventReason = 
  | UnsupportedReason
  | "download-progress"
  | "install-state-changed"
  | "flexible-update-downloaded"
  | "unknown";
```

Defined in: [react-native-in-app-updates/src/types.ts:39](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L39)

***

### Capabilities

```ts
type Capabilities = {
  immediate: boolean;
  flexible: boolean;
  storePage: boolean;
  latestVersionLookup: boolean;
  installStateListener: boolean;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:46](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L46)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="immediate"></a> `immediate` | `boolean` | [react-native-in-app-updates/src/types.ts:47](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L47) |
| <a id="flexible"></a> `flexible` | `boolean` | [react-native-in-app-updates/src/types.ts:48](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L48) |
| <a id="storepage"></a> `storePage` | `boolean` | [react-native-in-app-updates/src/types.ts:49](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L49) |
| <a id="latestversionlookup"></a> `latestVersionLookup` | `boolean` | [react-native-in-app-updates/src/types.ts:50](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L50) |
| <a id="installstatelistener-1"></a> `installStateListener` | `boolean` | [react-native-in-app-updates/src/types.ts:51](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L51) |

***

### AllowedFlows

```ts
type AllowedFlows = {
  immediate: boolean;
  flexible: boolean;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:54](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L54)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="immediate-1"></a> `immediate` | `boolean` | [react-native-in-app-updates/src/types.ts:55](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L55) |
| <a id="flexible-1"></a> `flexible` | `boolean` | [react-native-in-app-updates/src/types.ts:56](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L56) |

***

### PlayCoreDetails

```ts
type PlayCoreDetails = {
  immediateFailedPreconditions?: string[];
  flexibleFailedPreconditions?: string[];
  installErrorCode?: number;
  taskErrorCode?: number;
  updateAvailability?: string;
  installStatus?: string;
  updatePriority?: number;
  clientVersionStalenessDays?: number;
  availableVersionCode?: number;
  bytesDownloaded?: number;
  totalBytesToDownload?: number;
  immediateAllowed?: boolean;
  flexibleAllowed?: boolean;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:59](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L59)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="immediatefailedpreconditions"></a> `immediateFailedPreconditions?` | `string`[] | [react-native-in-app-updates/src/types.ts:60](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L60) |
| <a id="flexiblefailedpreconditions"></a> `flexibleFailedPreconditions?` | `string`[] | [react-native-in-app-updates/src/types.ts:61](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L61) |
| <a id="installerrorcode"></a> `installErrorCode?` | `number` | [react-native-in-app-updates/src/types.ts:62](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L62) |
| <a id="taskerrorcode"></a> `taskErrorCode?` | `number` | [react-native-in-app-updates/src/types.ts:63](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L63) |
| <a id="updateavailability"></a> `updateAvailability?` | `string` | [react-native-in-app-updates/src/types.ts:64](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L64) |
| <a id="installstatus-1"></a> `installStatus?` | `string` | [react-native-in-app-updates/src/types.ts:65](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L65) |
| <a id="updatepriority"></a> `updatePriority?` | `number` | [react-native-in-app-updates/src/types.ts:66](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L66) |
| <a id="clientversionstalenessdays"></a> `clientVersionStalenessDays?` | `number` | [react-native-in-app-updates/src/types.ts:67](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L67) |
| <a id="availableversioncode"></a> `availableVersionCode?` | `number` | [react-native-in-app-updates/src/types.ts:68](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L68) |
| <a id="bytesdownloaded"></a> `bytesDownloaded?` | `number` | [react-native-in-app-updates/src/types.ts:69](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L69) |
| <a id="totalbytestodownload"></a> `totalBytesToDownload?` | `number` | [react-native-in-app-updates/src/types.ts:70](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L70) |
| <a id="immediateallowed"></a> `immediateAllowed?` | `boolean` | [react-native-in-app-updates/src/types.ts:71](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L71) |
| <a id="flexibleallowed"></a> `flexibleAllowed?` | `boolean` | [react-native-in-app-updates/src/types.ts:72](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L72) |

***

### AndroidDetails

```ts
type AndroidDetails = {
  packageName?: string;
  playCore?: PlayCoreDetails;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:75](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L75)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="packagename"></a> `packageName?` | `string` | [react-native-in-app-updates/src/types.ts:76](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L76) |
| <a id="playcore"></a> `playCore?` | [`PlayCoreDetails`](#playcoredetails) | [react-native-in-app-updates/src/types.ts:77](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L77) |

***

### IosAppStoreDetails

```ts
type IosAppStoreDetails = {
  version?: string;
  trackViewUrl?: string;
  trackName?: string;
  releaseNotes?: string;
  description?: string;
  minimumOsVersion?: string;
  averageUserRating?: number;
  userRatingCount?: number;
  artworkUrl60?: string;
  artworkUrl100?: string;
  artworkUrl512?: string;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:80](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L80)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="version"></a> `version?` | `string` | [react-native-in-app-updates/src/types.ts:81](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L81) |
| <a id="trackviewurl"></a> `trackViewUrl?` | `string` | [react-native-in-app-updates/src/types.ts:82](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L82) |
| <a id="trackname"></a> `trackName?` | `string` | [react-native-in-app-updates/src/types.ts:83](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L83) |
| <a id="releasenotes"></a> `releaseNotes?` | `string` | [react-native-in-app-updates/src/types.ts:84](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L84) |
| <a id="description"></a> `description?` | `string` | [react-native-in-app-updates/src/types.ts:85](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L85) |
| <a id="minimumosversion"></a> `minimumOsVersion?` | `string` | [react-native-in-app-updates/src/types.ts:86](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L86) |
| <a id="averageuserrating"></a> `averageUserRating?` | `number` | [react-native-in-app-updates/src/types.ts:87](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L87) |
| <a id="userratingcount"></a> `userRatingCount?` | `number` | [react-native-in-app-updates/src/types.ts:88](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L88) |
| <a id="artworkurl60"></a> `artworkUrl60?` | `string` | [react-native-in-app-updates/src/types.ts:89](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L89) |
| <a id="artworkurl100"></a> `artworkUrl100?` | `string` | [react-native-in-app-updates/src/types.ts:90](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L90) |
| <a id="artworkurl512"></a> `artworkUrl512?` | `string` | [react-native-in-app-updates/src/types.ts:91](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L91) |

***

### IosDetails

```ts
type IosDetails = {
  bundleIdentifier?: string;
  appStoreId?: string;
  storeUrl?: string;
  appStore?: IosAppStoreDetails;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:94](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L94)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="bundleidentifier"></a> `bundleIdentifier?` | `string` | [react-native-in-app-updates/src/types.ts:95](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L95) |
| <a id="appstoreid"></a> `appStoreId?` | `string` | [react-native-in-app-updates/src/types.ts:96](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L96) |
| <a id="storeurl"></a> `storeUrl?` | `string` | [react-native-in-app-updates/src/types.ts:97](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L97) |
| <a id="appstore"></a> `appStore?` | [`IosAppStoreDetails`](#iosappstoredetails) | [react-native-in-app-updates/src/types.ts:98](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L98) |

***

### UpdateStatus

```ts
type UpdateStatus = {
  platform: Platform;
  supported: boolean;
  updateAvailable: boolean | null;
  capabilities: Capabilities;
  allowed: AllowedFlows;
  reason:   | AvailabilityReason
     | UnsupportedReason;
  currentVersion?: string;
  currentBuild?: string | number;
  latestStoreVersion?: string;
  latestStoreBuild?: string | number;
  installStatus?: InstallStatus;
  android?: AndroidDetails;
  ios?: IosDetails;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:101](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L101)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="platform-1"></a> `platform` | [`Platform`](#platform) | [react-native-in-app-updates/src/types.ts:102](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L102) |
| <a id="supported"></a> `supported` | `boolean` | [react-native-in-app-updates/src/types.ts:103](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L103) |
| <a id="updateavailable"></a> `updateAvailable` | `boolean` \| `null` | [react-native-in-app-updates/src/types.ts:104](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L104) |
| <a id="capabilities-1"></a> `capabilities` | [`Capabilities`](#capabilities) | [react-native-in-app-updates/src/types.ts:105](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L105) |
| <a id="allowed"></a> `allowed` | [`AllowedFlows`](#allowedflows) | [react-native-in-app-updates/src/types.ts:106](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L106) |
| <a id="reason"></a> `reason` | \| [`AvailabilityReason`](#availabilityreason) \| [`UnsupportedReason`](#unsupportedreason) | [react-native-in-app-updates/src/types.ts:107](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L107) |
| <a id="currentversion"></a> `currentVersion?` | `string` | [react-native-in-app-updates/src/types.ts:108](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L108) |
| <a id="currentbuild"></a> `currentBuild?` | `string` \| `number` | [react-native-in-app-updates/src/types.ts:109](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L109) |
| <a id="lateststoreversion"></a> `latestStoreVersion?` | `string` | [react-native-in-app-updates/src/types.ts:110](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L110) |
| <a id="lateststorebuild"></a> `latestStoreBuild?` | `string` \| `number` | [react-native-in-app-updates/src/types.ts:111](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L111) |
| <a id="installstatus-2"></a> `installStatus?` | [`InstallStatus`](#installstatus) | [react-native-in-app-updates/src/types.ts:112](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L112) |
| <a id="android"></a> `android?` | [`AndroidDetails`](#androiddetails) | [react-native-in-app-updates/src/types.ts:113](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L113) |
| <a id="ios"></a> `ios?` | [`IosDetails`](#iosdetails) | [react-native-in-app-updates/src/types.ts:114](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L114) |

***

### InstallStateEvent

```ts
type InstallStateEvent = {
  platform: Platform;
  supported: boolean;
  installStatus: InstallStatus;
  reason: InstallStateEventReason;
  bytesDownloaded?: number;
  totalBytesToDownload?: number;
  progress?: number;
  errorCode?: string;
  message?: string;
  android?: AndroidDetails;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:117](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L117)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="platform-2"></a> `platform` | [`Platform`](#platform) | [react-native-in-app-updates/src/types.ts:118](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L118) |
| <a id="supported-1"></a> `supported` | `boolean` | [react-native-in-app-updates/src/types.ts:119](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L119) |
| <a id="installstatus-3"></a> `installStatus` | [`InstallStatus`](#installstatus) | [react-native-in-app-updates/src/types.ts:120](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L120) |
| <a id="reason-1"></a> `reason` | [`InstallStateEventReason`](#installstateeventreason) | [react-native-in-app-updates/src/types.ts:121](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L121) |
| <a id="bytesdownloaded-1"></a> `bytesDownloaded?` | `number` | [react-native-in-app-updates/src/types.ts:122](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L122) |
| <a id="totalbytestodownload-1"></a> `totalBytesToDownload?` | `number` | [react-native-in-app-updates/src/types.ts:123](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L123) |
| <a id="progress"></a> `progress?` | `number` | [react-native-in-app-updates/src/types.ts:124](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L124) |
| <a id="errorcode"></a> `errorCode?` | `string` | [react-native-in-app-updates/src/types.ts:125](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L125) |
| <a id="message"></a> `message?` | `string` | [react-native-in-app-updates/src/types.ts:126](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L126) |
| <a id="android-1"></a> `android?` | [`AndroidDetails`](#androiddetails) | [react-native-in-app-updates/src/types.ts:127](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L127) |

***

### AndroidUpdateOptions

```ts
type AndroidUpdateOptions = {
  allowAssetPackDeletion?: boolean;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:130](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L130)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="allowassetpackdeletion"></a> `allowAssetPackDeletion?` | `boolean` | [react-native-in-app-updates/src/types.ts:131](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L131) |

***

### GetUpdateStatusOptions

```ts
type GetUpdateStatusOptions = {
  ios?: {
     appStoreId?: string;
     country?: string;
  };
  android?: AndroidUpdateOptions;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:134](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L134)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ios-1"></a> `ios?` | \{ `appStoreId?`: `string`; `country?`: `string`; \} | [react-native-in-app-updates/src/types.ts:135](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L135) |
| `ios.appStoreId?` | `string` | [react-native-in-app-updates/src/types.ts:136](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L136) |
| `ios.country?` | `string` | [react-native-in-app-updates/src/types.ts:137](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L137) |
| <a id="android-2"></a> `android?` | [`AndroidUpdateOptions`](#androidupdateoptions) | [react-native-in-app-updates/src/types.ts:139](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L139) |

***

### StartImmediateUpdateOptions

```ts
type StartImmediateUpdateOptions = {
  android?: AndroidUpdateOptions;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:142](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L142)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="android-3"></a> `android?` | [`AndroidUpdateOptions`](#androidupdateoptions) | [react-native-in-app-updates/src/types.ts:143](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L143) |

***

### StartFlexibleUpdateOptions

```ts
type StartFlexibleUpdateOptions = {
  android?: AndroidUpdateOptions;
};
```

Defined in: [react-native-in-app-updates/src/types.ts:146](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L146)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="android-4"></a> `android?` | [`AndroidUpdateOptions`](#androidupdateoptions) | [react-native-in-app-updates/src/types.ts:147](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L147) |

***

### OpenStorePageOptions

```ts
type OpenStorePageOptions = {
  ios?: {
     appStoreId: string;
     country?: string;
  };
};
```

Defined in: [react-native-in-app-updates/src/types.ts:150](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L150)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="ios-2"></a> `ios?` | \{ `appStoreId`: `string`; `country?`: `string`; \} | [react-native-in-app-updates/src/types.ts:151](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L151) |
| `ios.appStoreId` | `string` | [react-native-in-app-updates/src/types.ts:152](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L152) |
| `ios.country?` | `string` | [react-native-in-app-updates/src/types.ts:153](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L153) |

***

### InAppUpdatesErrorCode

```ts
type InAppUpdatesErrorCode = "invalid-input" | "bridge-error" | "native-error" | "unexpected";
```

Defined in: [react-native-in-app-updates/src/types.ts:157](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/types.ts#L157)

## Functions

### addInstallStateListener()

```ts
function addInstallStateListener(listener): InstallStateSubscription;
```

Defined in: [react-native-in-app-updates/src/addInstallStateListener.ts:10](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/addInstallStateListener.ts#L10)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `listener` | [`InstallStateListener`](#installstatelistener) |

#### Returns

[`InstallStateSubscription`](#installstatesubscription)

***

### completeFlexibleUpdate()

```ts
function completeFlexibleUpdate(): Promise<UpdateStatus>;
```

Defined in: [react-native-in-app-updates/src/completeFlexibleUpdate.ts:6](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/completeFlexibleUpdate.ts#L6)

#### Returns

`Promise`\<[`UpdateStatus`](#updatestatus)\>

***

### getUpdateStatus()

```ts
function getUpdateStatus(options?): Promise<UpdateStatus>;
```

Defined in: [react-native-in-app-updates/src/getUpdateStatus.ts:7](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/getUpdateStatus.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`GetUpdateStatusOptions`](#getupdatestatusoptions) |

#### Returns

`Promise`\<[`UpdateStatus`](#updatestatus)\>

***

### isUpdateAvailable()

```ts
function isUpdateAvailable(status): boolean;
```

Defined in: [react-native-in-app-updates/src/helpers.ts:6](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/helpers.ts#L6)

Returns true if a newer version is available in the store.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`UpdateStatus`](#updatestatus) |

#### Returns

`boolean`

***

### canStartImmediateUpdate()

```ts
function canStartImmediateUpdate(status): boolean;
```

Defined in: [react-native-in-app-updates/src/helpers.ts:13](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/helpers.ts#L13)

Returns true if an immediate update flow can be started right now.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`UpdateStatus`](#updatestatus) |

#### Returns

`boolean`

***

### canStartFlexibleUpdate()

```ts
function canStartFlexibleUpdate(status): boolean;
```

Defined in: [react-native-in-app-updates/src/helpers.ts:25](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/helpers.ts#L25)

Returns true if a flexible update flow can be started right now.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`UpdateStatus`](#updatestatus) |

#### Returns

`boolean`

***

### canCompleteFlexibleUpdate()

```ts
function canCompleteFlexibleUpdate(status): boolean;
```

Defined in: [react-native-in-app-updates/src/helpers.ts:39](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/helpers.ts#L39)

Returns true if a downloaded flexible update can be completed.

This checks the downloaded install-state, not update availability.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`UpdateStatus`](#updatestatus) |

#### Returns

`boolean`

***

### canOpenStorePage()

```ts
function canOpenStorePage(status): boolean;
```

Defined in: [react-native-in-app-updates/src/helpers.ts:52](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/helpers.ts#L52)

Returns true if the store page can be opened for this app.

This may be true even when in-app updates are unsupported (e.g. iOS).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`UpdateStatus`](#updatestatus) |

#### Returns

`boolean`

***

### supportsInstallStateListener()

```ts
function supportsInstallStateListener(status): boolean;
```

Defined in: [react-native-in-app-updates/src/helpers.ts:59](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/helpers.ts#L59)

Returns true if the platform supports install-state listeners.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | [`UpdateStatus`](#updatestatus) |

#### Returns

`boolean`

***

### openStorePage()

```ts
function openStorePage(options?): Promise<void>;
```

Defined in: [react-native-in-app-updates/src/openStorePage.ts:21](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/openStorePage.ts#L21)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`OpenStorePageOptions`](#openstorepageoptions) |

#### Returns

`Promise`\<`void`\>

***

### startFlexibleUpdate()

```ts
function startFlexibleUpdate(options?): Promise<UpdateStatus>;
```

Defined in: [react-native-in-app-updates/src/startFlexibleUpdate.ts:7](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/startFlexibleUpdate.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`StartFlexibleUpdateOptions`](#startflexibleupdateoptions) |

#### Returns

`Promise`\<[`UpdateStatus`](#updatestatus)\>

***

### startImmediateUpdate()

```ts
function startImmediateUpdate(options?): Promise<UpdateStatus>;
```

Defined in: [react-native-in-app-updates/src/startImmediateUpdate.ts:7](https://github.com/rnforge/react-native-in-app-updates/blob/b1e1fc194b5d29061d50116c1596dcfc6681ce69/src/startImmediateUpdate.ts#L7)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`StartImmediateUpdateOptions`](#startimmediateupdateoptions) |

#### Returns

`Promise`\<[`UpdateStatus`](#updatestatus)\>
