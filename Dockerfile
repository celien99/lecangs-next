FROM node:latest

# 设置工作目录
WORKDIR /usr/src/app/lecangs-next

# 拷贝 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 配置npm镜像
RUN npm config set registry https://registry.npm.taobao.org

# 安装项目依赖
RUN npm install

# 拷贝项目文件
COPY . .

# 构建项目
RUN npm run build

# 暴露应用程序的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]