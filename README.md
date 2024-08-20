# Recognized

The script should read users from file users.json and find all possible emails from file sample_data.json.

For example for the user with the name Michael Scott and email michael.scott@renormale.com
possible emails are michael.scott@gmail.com, michael.scott77@outlook.com, michael236scott@yahoo.com, mi.scott@gmail.com etc.

Output should be to JSON file by structure:
{
“recognized”: {“user_email”: string, “related_emails”: string[]}[],
“not_recognized”: string[]
}

## Getting Started

Follow these instructions to set up and run this code:

### Installation

1. Clone the repository:

```bash
    git clone https://github.com/just-Daniel/recognize_email.git
```

2. Go to the project directory:

```bash
    cd recognize_email
```

3. Build the project by command:

```bash
    npm i
```

   <p> and run: </p>

```bash
    npm run build
```

4. Run code:

```bash
    npm run start
```

In the terminal, you will see the text where the answer file is stored:

<span style="color:green;">✅ Data successfully written .../recognize_email/dist/data/output.json</span>
