# NLP News Analyzer

This application analyzes the objectivity of a news story using the [MeaningCloud's sentiment analysis API (v. 2.1)](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1). It accepts a text or a URL to a non-paywalled news story.

Note that entering directly text that includes quotation marks, parentheses or m-dashes is not supported.

When a news story is entered into the search form it shows:

-   The subjectivity of the text: OBJECTIVE or SUBJECTIVE.
-   If the text is ironic or not: IRONIC or NONIRONIC.
-   A score tag that indicates the polarity of the given text: P stands for positive, N stands for negative and, NEU stands for neutral.
-   A confidence percentage score associated with the resulting analysis.

For more information please refer to MeaningCloud's [API documentation](https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response).

## TODO:

-   Add support for other languages.
-   Improve the styling of the user interface.
-   Improve input validation on the server side.
-   Add support for text with quotation marks and other punctuation currently not supported.
