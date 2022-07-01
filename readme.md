## uniapp 离线打包步骤

### 一、整包打包

- 配置发包的版本号
  ![b](/imgs/b.jpg)

- 生成本地打包资源

  > 资源包所在路径：E:\workspace\ssit\axcloud\unpackage\resources
  > ![a](/imgs/a.jpg)

- 将资源包拷贝到如下目录

  > HBuilder-Integrate-AS\simpleDemo\src\main\assets\apps

- 配置打包工程中 build.gradle 版本号【跟在 Hbuildx 中配置的版本号保持一致】

  > ![c](/imgs/c.jpg)

- 证书所在位置(后面要用)

  > HBuilder-Integrate-AS\axcloud.keystore

  > 查看证书： `keytool -list -v -keystore axcloud.keystore`

  > ![g](/imgs/g.png)

- 开始打包

> ![d](/imgs/d.jpg)

- 配置证书【key store password/key password 都是 ssit123456】

  > ![e](/imgs/e.png)

  > ![f](/imgs/f.png)

- 打包结束。apk 所在位置
  > HBuilder-Integrate-AS\simpleDemo\release

### 二、补丁包打包（wgt 文件）

- 制作应用 wgt 包。【修改版本名&版本号】

> ![1](/imgs/1.jpg)

### 三、上传至服务端

- 地址：http://cms.sf8cloud.com/

> ![2](/imgs/2.jpg)

> ![3](/imgs/3.jpg)
