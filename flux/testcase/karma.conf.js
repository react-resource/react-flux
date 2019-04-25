// Karma configuration
// Generated on Mon Apr 08 2019 20:08:49 GMT+0800 (GMT+08:00)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '', // 设置根目录


    // frameworks to use  测试框架
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha', 
      'chai',
      // 'requirejs'
    ],


    // list of files / patterns to load in the browser  浏览器中加载的文件
    files: [
      'index.js',
      'test/**/*.js'
    ],


    // list of files / patterns to exclude  浏览器中加载的文件中排除的文件
    exclude: [
    ],


    // preprocess matching files before serving them to the browser   预处理
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'index.js': ['coverage'] // test-main.js文件使用coverage进行预处理，加入karma-coverage插件
    },


    // test results reporter to use  添加额外的插件
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port  开启测试服务时监听的端口
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes  监听文件变化，发生变化则重新编译
    autoWatch: true,


    // start these browsers  测试的浏览器
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome',
      //  'ChromeHeadless', 
      //  'PhantomJS'
    ],


    // Continuous Integration mode  执行测试用例后是否关闭测试服务
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // 覆盖率测试输出coverageReporter配置
    coverageReporter: {
      type : 'text-summary'
    },

    plugins: [
      'karma-chrome-launcher',
      // 'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-coverage',
      // 'karma-requirejs'
    ]
  })
}
