
#### 操作指令
1. 全局安装 weexpack
    npm install weexpack -g
2. 生成项目
    weexpack create name
3. 进入项目根目录 安装依赖
    npm install
4. 安装应用模板,生成android后ios工程
    weexpack platform add android 
    weexpack platform add ios
5. 打包apk
    weexpack run android
6. web打包
    weexpack build web
7. web运行
    weexpack run web(若失败,可运行 npm run serve)
8. 热更新(实时更新代码 [x])
    npm run serve_watch

#### Issue
* web打包失败 ERROR in js/test.js from UglifyJs
        配置babel，把配置放到文件【.babelrc】中 文件内容:```{"presets": ["es2015"]}```
        
* Vue中的数据双向绑定在改变数组时,无法检测;