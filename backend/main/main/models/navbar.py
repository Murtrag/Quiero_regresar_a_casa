from django.db import models

class Tab(models.Model):
    # name: "Panel:",
    # icon: <Icon>dashboard</Icon>,
    # columns: 1,
    # rowsPerColumn: 2,
    # collapse: [
    name = models.CharField(max_length=35)
    # icon = JSX
    columns = models.SmallIntegerField()
    rows_per_column = models.SmallIntegerField()
    href = models.CharField(max_length=250)
    collapse = models.ManyToManyField(SubTab)

class SubTab(models.Model):
        # name: "page sections",
        # description: "See all sections",
        # dropdown: true,
        # collapse: [
    name = models.CharField(max_length=35)
    description = models.CharField(max_length=100)
    href = models.CharField(max_length=250)
    dropdown = models.BooleanField()
    collapse = models.ManyToManyField(SubElement)

class SubElement(models.Model):
    name = models.CharField(max_length=35)
    description = models.CharField(max_length=100)
    href = models.CharField(max_length=250)

