/*If we run this code, we get an output of ['Start', 'Unknown', 'Unknown', 'Unknown', 'Unknown']. This is because the parseInt function has the wrong radix. In this case, we want to use a radix of 2 to convert the binary string to a decimal number.*/

function decodeBinaryCommands(binaryStrings) {
  const commands = [];

  for (let binStr of binaryStrings) {
    const command = parseInt(binStr, 10);

    switch (command) {
      case 1:
        commands.push("Start");
        break;
      case 2:
        commands.push("Stop");
        break;
      case 3:
        commands.push("Pause");
        break;
      case 4:
        commands.push("Resume");
        break;
      default:
        commands.push("Unknown");
        break;
    }
  }

  return commands;
}

const binaryCommands = ["0001", "0010", "0100", "0011", "1100"];
const decodedCommands = decodeBinaryCommands(binaryCommands);
console.log(decodedCommands);





function decodeBinaryCommands2  (binaryStrings) {
  const commands = [];

  for (let binStr of binaryStrings) {
    const command = parseInt(binStr, 2);

    switch (command) {
      case 1:
        commands.push("Start");
        break;
      case 2:
        commands.push("Stop");
        break;
      case 3:
        commands.push("Pause");
        break;
      case 4:
        commands.push("Resume");
        break;
      default:
        commands.push("Unknown");
        break;
    }
  }

  return commands;
}

const binaryCommands2 = ["0001", "0010", "0100", "0011", "1100"];
const decodedCommands2 = decodeBinaryCommands2(binaryCommands2);
console.log(decodedCommands2);