import { Box, TextField, Typography } from "@mui/material"

const SignUp = (): React.ReactNode => {
    return <Box>
        <Box>
            <Typography>Welcome</Typography>
            <Typography>Description</Typography>
            <Box>
                <Typography>Name</Typography>
                <TextField id="name" variant="outlined" placeholder="Name example" />
                <Typography>Email</Typography>
                <TextField id="email" variant="outlined" placeholder="example@email.com" />
                <Typography>Password</Typography>
                <TextField id="password" variant="outlined" placeholder="at least 8 characters" />
            </Box>
        </Box>
        <Box></Box>

    </Box>
}

export default SignUp;