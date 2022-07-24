function formChange(emailAddress) {
    emailAddress.target.name === "email" ? const valid = validateEmail(emailAddress.target.value);
      if (!valid) {
        setErrMessage("Your email is invalid");
      } else {
        if (!emailAddress.target.value.length) {
          setErrMessage(`${emailAddress.target.name} is required`);
        } else {
          setErrMessage("");
        }
      }
    }

    if (!errMessage) {
      setFormState({
        ...formState,
        [emailAddress.target.name]: emailAddress.target.value,
      });
    }
  }

  function blank(emailAddress) {
    if (
      emailAddress.target.name === "Name" ||
      emailAddress.target.name === "Message"
    ) {
      if (!emailAddress.target.value.length) {
        setErrMessage(`${emailAddress.target.name} is required`);
      } else {
        setErrMessage("");
      }
    }

    if (!errMessage) {
      setFormState({ ...formState, [emailAddress.target.name]: emailAddress.target.value });
    }
  }