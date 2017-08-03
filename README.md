
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
    weexpack run web
8. 热更新(实时更新代码)
    npm run web_watch
    