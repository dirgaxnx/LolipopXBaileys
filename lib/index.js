"use strict";

const chalk = require("chalk");

const BOT_NAME = "LOLIPOP";
const DEVELOPER = "@Popyeyeye";
const VERSION = "1.0.0";

const originalConsoleLog = console.log;
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

console.log = function(...args) {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = chalk.cyan(`[${timestamp}]`) + chalk.magentaBright(` [${BOT_NAME}] `);
  originalConsoleLog(prefix, ...args);
};

console.error = function(...args) {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = chalk.cyan(`[${timestamp}]`) + chalk.redBright(` [${BOT_NAME} ERROR] `);
  originalConsoleError(prefix, ...args);
  
  args.forEach(arg => {
    if (arg instanceof Error) {
      detectErrorType(arg);
    }
  });
};

console.warn = function(...args) {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = chalk.cyan(`[${timestamp}]`) + chalk.yellowBright(` [${BOT_NAME} WARN] `);
  originalConsoleWarn(prefix, ...args);
};

function detectErrorType(error) {
  const errorMessage = error.message.toLowerCase();
  const stack = error.stack || '';
  
  console.warn(chalk.yellow('⚠️ Error Analysis:'));
  
  if (errorMessage.includes('connect') || errorMessage.includes('connection') || 
      errorMessage.includes('network') || errorMessage.includes('socket')) {
    console.warn(chalk.yellow('  🔍 Type: Connection Error'));
    console.warn(chalk.yellow('  💡 Solution: Check internet connection or server status'));
  }
  
  if (errorMessage.includes('auth') || errorMessage.includes('login') || 
      errorMessage.includes('credential') || errorMessage.includes('session')) {
    console.warn(chalk.yellow('  🔍 Type: Authentication Error'));
    console.warn(chalk.yellow('  💡 Solution: Re-authenticate or clear session data'));
  }
  
  if (errorMessage.includes('timeout') || errorMessage.includes('timed out')) {
    console.warn(chalk.yellow('  🔍 Type: Timeout Error'));
    console.warn(chalk.yellow('  💡 Solution: Increase timeout or check network latency'));
  }
  
  if (errorMessage.includes('memory') || errorMessage.includes('heap')) {
    console.warn(chalk.yellow('  🔍 Type: Memory Error'));
    console.warn(chalk.yellow('  💡 Solution: Increase memory limit or optimize code'));
  }
  
  if (errorMessage.includes('api') || errorMessage.includes('endpoint') || 
      errorMessage.includes('response')) {
    console.warn(chalk.yellow('  🔍 Type: API Error'));
    console.warn(chalk.yellow('  💡 Solution: Check API documentation or endpoint URL'));
  }
  
  if (errorMessage.includes('database') || errorMessage.includes('db') || 
      errorMessage.includes('query') || errorMessage.includes('sql')) {
    console.warn(chalk.yellow('  🔍 Type: Database Error'));
    console.warn(chalk.yellow('  💡 Solution: Check database connection or query syntax'));
  }
  
  if (process.env.DEBUG === 'true') {
    console.warn(chalk.gray('  📝 Stack Trace:'));
    console.warn(chalk.gray('  ' + stack.split('\n').slice(0, 5).join('\n  ')));
  }
}

function logWithStyle(type, message) {
  const styles = {
    success: { color: chalk.greenBright, icon: '✅' },
    info: { color: chalk.blueBright, icon: 'ℹ️' },
    warning: { color: chalk.yellowBright, icon: '⚠️' },
    error: { color: chalk.redBright, icon: '❌' },
    debug: { color: chalk.magentaBright, icon: '🐛' },
    event: { color: chalk.cyanBright, icon: '📡' }
  };
  
  const style = styles[type] || styles.info;
  const timestamp = new Date().toLocaleTimeString();
  
  originalConsoleLog(
    chalk.cyan(`[${timestamp}]`),
    chalk.magentaBright(`[${BOT_NAME}]`),
    style.icon,
    style.color(message)
  );
}

exports.logger = {
  success: (msg) => logWithStyle('success', msg),
  info: (msg) => logWithStyle('info', msg),
  warning: (msg) => logWithStyle('warning', msg),
  error: (msg) => logWithStyle('error', msg),
  debug: (msg) => logWithStyle('debug', msg),
  event: (msg) => logWithStyle('event', msg)
};

console.log(chalk.magentaBright.bold("\n✨ Modified Baileys - Enhanced Edition ✨"));
console.log(chalk.whiteBright(`Custom environment loaded successfully.`));
console.log(chalk.whiteBright(`Bot Name: ${chalk.greenBright(BOT_NAME)}`));
console.log(chalk.whiteBright(`Version: ${chalk.greenBright(VERSION)}`));
console.log(chalk.whiteBright(`Developer: ${chalk.greenBright(DEVELOPER)}`));
console.log(chalk.whiteBright(`Node.js: ${chalk.greenBright(process.version)}`));

console.log(chalk.gray("\n──────────────────────────────────────────\n"));

console.log(
  chalk.magentaBright(`
⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⠒⠉⠉⠉⠉⠙⠒⠤⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡤⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀
⠀⠀⠀⢀⡴⠋⠀⠀⢀⣀⡀⠀⠀⢀⣀⠀⠀⣀⡀⠀⠈⢣⡀⠀⠀
⠀⠀⢀⡞⠀⢀⣴⡾⠋⠉⠉⠒⠤⠈⠉⠉⠒⠉⠉⠳⣦⡀⢣⠀⠀
⠀⢀⡞⢀⣾⣿⠋⠀⠀⢠⠶⠒⠒⠒⠒⠒⠒⠶⡄⠀⠈⢿⣧⡇⠀
⠀⣼⠀⣾⡿⠁⠀⠀⠀⠘⠓⠒⠒⠒⠒⠒⠒⠚⠃⠀⠀⠀⢿⣷⠀
⢰⡇⢸⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀
⢸⡇⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀
⠸⡇⠀⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀
⠀⢿⡀⠀⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠟⠀⠀⠀
⠀⠀⠙⢦⣀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⣀⡴⠃⠀
⠀⠀⠀⠀⠈⠙⠲⢤⣉⠑⠢⣀⠀⠀⠀⢀⡠⠔⠉⣠⠴⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠒⠬⠭⠭⠭⠥⠴⠒⠉⠁⠀⠀⠀⠀⠀
`)
);

console.log(chalk.whiteBright(`( # ) Thank you for using ${BOT_NAME} Baileys`));
console.log(chalk.whiteBright(`( # ) Enhanced with automatic error detection`));
console.log(chalk.whiteBright(`( # ) All console outputs are now labeled with ${BOT_NAME}`));
console.log(chalk.whiteBright(`( # ) Sharing is caring! Feel free to share this modification`));

console.log(chalk.gray("──────────────────────────────────────────\n"));

logWithStyle('success', 'Logger system initialized');
logWithStyle('success', 'Error detection system active');
logWithStyle('info', 'Ready to process messages');

process.on('uncaughtException', (error) => {
  console.error(chalk.redBright('UNCAUGHT EXCEPTION'));
  console.error(chalk.redBright('Error:', error.message));
  detectErrorType(error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(chalk.redBright('⚠️ UNHANDLED REJECTION ⚠️'));
  console.error(chalk.redBright('Reason:', reason));
  
  if (reason instanceof Error) {
    detectErrorType(reason);
  }
});

var createBinding =
  (this && this.createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);

        if (
          !desc ||
          (!("get" in desc) && (desc.writable || desc.configurable))
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }

        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });

var exportStar =
  (this && this.exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
        createBinding(exports, m, p);
  };

var importDefault =
  (this && this.importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const Socket_1 = importDefault(require("./Socket"));

exports.makeWASocket = Socket_1.default;

exportStar(require("../WAProto"), exports);
exportStar(require("./Utils"), exports);
exportStar(require("./Types"), exports);
exportStar(require("./Store"), exports);
exportStar(require("./Defaults"), exports);
exportStar(require("./WABinary"), exports);
exportStar(require("./WAM"), exports);
exportStar(require("./WAUSync"), exports);

exports.logger = exports.logger;

exports.default = Socket_1.default;