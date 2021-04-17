import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../components/InputField";
import { toErrorMap } from "../src/utils/toErrorMap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import register from "../api-functions/mutations/register";

interface Values {
  email: string;
  password: string;
}

interface registerProps {}

const Register: React.FC<registerProps> = () => {
  const router = useRouter();
  const mutation = useMutation(register);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Container maxWidth="xs">
        <Head>
          <title>Register | Start Purchasing</title>
        </Head>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
          }}
          onSubmit={async (values, { setErrors }) => {
            const response = await mutation.mutateAsync(values);
            const user = response.user;
            const token = response.token;
            if (response.errors) {
              setErrors(toErrorMap(response.errors));
            } else if (user && token) {
              localStorage.setItem("qid", token);
              router.replace("/");
            }
          }}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              <Box
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                paddingY="30px"
                display="flex"
                minHeight="100vh"
              >
                <Link href="/">
                  <a>
                    <Typography align="center" variant="h3">
                      Go Loop
                    </Typography>
                  </a>
                </Link>
                <InputField
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  value={values.email}
                />
                <InputField
                  onChange={handleChange}
                  name="username"
                  label="Username"
                  value={values.username}
                />
                <InputField
                  onChange={handleChange}
                  password
                  name="password"
                  value={values.password}
                />
                <Box width="100%" margin={1}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    fullWidth
                  >
                    Register
                    {isSubmitting && (
                      <CircularProgress
                        style={{ marginLeft: 10 }}
                        size={15}
                        color="primary"
                      />
                    )}
                  </Button>
                  <Box my={2} width="100%">
                    <Typography variant="body2">
                      Already got an account{" "}
                      <Link href="/login">
                        <a style={{ color: "#00b6f1" }}>login</a>
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </motion.div>
  );
};

export default Register;
