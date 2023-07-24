from datetime import date 

year_choice = [
        (r,r) for r in range(1984, date.today().year+1)
        ]

hair_colors = (
        (0, "Black",),
        (1, "Very Dark Brown",),
        (2, "Dark Brown",),
        (3, "Medium Brown",),
        (4, "Light Brown",),
        (5, "Dark Blonde",),
        (6, "Medium Blonde",),
        (7, "Light Blonde",),
        )

hair_length = (
        (0, "short",),
        (1, "medium",),
        (2, "long",),
        (3, "very long",),
        (4, "extreme long",),
        )

sex_choice = (
        ('m', "Male"),
        ('f', "Female"),
        ('t', "Transgender"),
        ('nb', "Non-binary"),
        ('o', "Other"),
        )

eye_color = (
        (0, "Blue"),
        (1, "Brown"),
        (2, "Gray"),
        (3, "Hazel"),
        (4, "Red"),
        )
